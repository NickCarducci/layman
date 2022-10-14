[How to Use Cloudflare Tunnel to Expose Multiple Local Services](https://tech.aufomm.com/how-to-use-cloudflare-tunnel-to-expose-multiple-local-services/)

[Cloudflare Zero Trust](https://developers.cloudflare.com/cloudflare-one/setup/)

`openssl x509 -noout -fingerprint -sha1 -inform pem -in Cloudflare_CA.pem` (dbl-click trust in your Keychain desktop application)

> Cloudflare _for Teams_ ECC Certificate Authority, "when using this certificate": `Always Trust`

```
docker run --detach --network vaumoney cloudflare/cloudflared:latest tunnel --no-autoupdate run --token eyJhIjoiOWRkY2E3YzlkZjYwNDY2OGZjNmQxNGYwNzliMmYwNjYiLCJ0IjoiZTU2NmEzODQtODNmZS00YmY1LThlNDItNjgwMGUxNTgwNjlhIiwicyI6Ik9HWmxPR1JsTXpFdFlXTTBOUzAwWkRJMExUZ3dNVFV0TTJSbE1EUTRPVEJpWmpsbCJ9
```

# Install Docker Desktop on Mac
