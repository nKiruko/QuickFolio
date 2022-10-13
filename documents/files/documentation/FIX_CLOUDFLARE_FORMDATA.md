# Fix for Cloudflare FormData

A nice Cloudflare engineer provided us with the following fix for the compatibilty dates:

```bash
curl --request PATCH 'https://api.cloudflare.com/client/v4/accounts/:account_id/pages/projects/:project_name' \
--header 'Authorization: Bearer <token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "deployment_configs": {
        "production": {
            "compatibility_flags": [
                "url_standard"
            ],
            "compatibility_date": "2022-10-12"
        },
        "preview": {
            "compatibility_flags": [
                "url_standard"
            ],
            "compatibility_date": "2022-10-12"
        }
    }
}'
```

This sets an undocumented compatibility date on the Cloudflare Pages internal Worker. This is needed to patch the FormData issue where a file gets converted to UTF-8, breaking the contents.
