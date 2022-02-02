# Tuvo Homepage

Homepage for Tuvo LLC, hosted at [tuvo.io](https://tuvo.io)


Built using Angular. Deployed using AWS + Terraform, though Terraform configuration is under construction.

## Deployment
- Install Angular and related modules using `npm install` from the root directory.
- Build for production using `ng build --configuration=production`.
- The artifact files land in an adjacent directory `../tuvo-homepage-deploy`.
- Copy these files into the S3 bucket indicated by the Terraform module `resource "aws_s3_bucket" "website_bucket" `.
- In AWS, make these files publically accessible. The website is now updated!

## Run local
Run locally using:
```
npm install 
ng serve
```
The page is now served on `localhost:4200`

## Notes

TODO
- Write readme for using this terraform to create a new website. Try it with a new domain when ready.
- Standardize deploy script for Angular build -> s3 location from terraform 
