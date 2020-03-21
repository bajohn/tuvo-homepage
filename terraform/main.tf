provider "aws" {
  region  = "us-east-1"
  profile = "default"
}


resource "aws_cloudfront_distribution" "tuvo_distribution" {
  origin {
    origin_id   = "S3-tuvo/tuvo.s3.amazonaws.com/index/dist/index.html"
    domain_name = "d2w67oumh7fi0w.cloudfront.net" // aws_cloudfront_distribution.tuvo_distribution.domain_name
  }


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
    default_ttl            = 3600
    max_ttl                = 86400
  }
  enabled         = true
  is_ipv6_enabled = true
  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:748004005034:certificate/6f3a889d-9af4-40fd-bdb4-dc65030d4951"
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}
