provider "aws" {
  region  = var.region
  profile = "default"
}


resource "aws_cloudfront_distribution" "website_distribution" {
  origin {
    domain_name = "${var.bucket-name}.s3.amazonaws.com"
    origin_id   =  "${var.domain-name}-s3-origin" 
  }
  aliases = [ var.domain-name]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "${var.domain-name}-s3-origin"  

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000
  }
  enabled         = true
  is_ipv6_enabled = true
  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.website_cert.arn
    minimum_protocol_version = "TLSv1.1_2016"
    ssl_support_method       = "sni-only"
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}


resource "aws_route53_record" "website_record_a" {
  zone_id = aws_route53_zone.website_zone.zone_id
  name    =  var.domain-name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.website_distribution.hosted_zone_id 
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "website_record_aaaa" {
  zone_id = aws_route53_zone.website_zone.zone_id
  name    = var.domain-name
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.website_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.website_distribution.hosted_zone_id 
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "website_record_ns" {
  allow_overwrite = true
  zone_id = aws_route53_zone.website_zone.zone_id
  name    =  var.domain-name
  type    = "NS"
    records = [
    "${aws_route53_zone.website_zone.name_servers.0}",
    "${aws_route53_zone.website_zone.name_servers.1}",
    "${aws_route53_zone.website_zone.name_servers.2}",
    "${aws_route53_zone.website_zone.name_servers.3}",
  ]
  ttl     = "300"

}
resource "aws_route53_record" "website_record_soa" {
  allow_overwrite = true
  zone_id = aws_route53_zone.website_zone.zone_id
  name    = var.domain-name
  type    = "SOA"
  records=["${aws_route53_zone.website_zone.name_servers.0} awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400"]
  ttl     = "900"

}

resource "aws_route53_zone" "website_zone" {
  name    =  var.domain-name
  comment = ""
}


resource "aws_s3_bucket" "website_bucket" {
  bucket = var.bucket-name
  acl    = "private"
  website {
    error_document = "index.html"
    index_document = "index.html"
  }
}

resource "aws_acm_certificate" "website_cert" {
  domain_name       =  var.domain-name
  validation_method = "DNS"

}
