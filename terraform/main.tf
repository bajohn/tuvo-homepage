provider "aws" {
  region  = "us-east-1"
  profile = "default"
}


resource "aws_cloudfront_distribution" "tuvo_distribution" {
  origin {
    domain_name = "tuvo.s3.amazonaws.com"
    origin_id   = "S3-tuvo/tuvo.s3.amazonaws.com/index/dist/index.html"
  }
  aliases = ["tuvo.io"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-tuvo/tuvo.s3.amazonaws.com/index/dist/index.html"

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
    acm_certificate_arn      = "arn:aws:acm:us-east-1:748004005034:certificate/6f3a889d-9af4-40fd-bdb4-dc65030d4951"
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


resource "aws_route53_record" "tuvo_a" {
    zone_id = "Z1M99FTY5XPK1J"
    name    = "tuvo.io"
    type    = "A"

    alias {
        name    = "d2w67oumh7fi0w.cloudfront.net"
        zone_id = "Z2FDTNDATAQYW2"
        evaluate_target_health = false
    }
}

resource "aws_route53_record" "tuvo_aaaa" {
    zone_id = "Z1M99FTY5XPK1J"
    name    = "tuvo.io"
    type    = "AAAA"

    alias {
        name    = "d2w67oumh7fi0w.cloudfront.net"
        zone_id = "Z2FDTNDATAQYW2"
        evaluate_target_health = false
    }
}

resource "aws_route53_record" "tuvo_ns" {
    zone_id = "Z1M99FTY5XPK1J"
    name    = "tuvo.io"
    type    = "NS"
    records = ["ns-2046.awsdns-63.co.uk.", "ns-600.awsdns-11.net.", "ns-271.awsdns-33.com.", "ns-1220.awsdns-24.org."]
    ttl     = "300"

}
resource "aws_route53_record" "tuvo_soa" {
    zone_id = "Z1M99FTY5XPK1J"
    name    = "tuvo.io"
    type    = "SOA"
    records = ["ns-2046.awsdns-63.co.uk. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400"]
    ttl     = "900"

}

