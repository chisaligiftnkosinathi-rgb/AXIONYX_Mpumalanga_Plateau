# AXIONYX DIGITAL TWIN RUNTIME
# Solar Farm Twin v1

FROM node:20-alpine AS builder

WORKDIR /app
COPY . .
# RUN npm run build:solar-twin

FROM node:20-alpine AS runtime
WORKDIR /app
# COPY --from=builder /app/dist /app

ENV AXIONYX_TWIN_ID="solar-farm-twin-v1"
ENV AXIONYX_DOMAIN="energy"

# Expose Twin Data Stream Port
EXPOSE 5000

CMD ["node", "server.js"]
