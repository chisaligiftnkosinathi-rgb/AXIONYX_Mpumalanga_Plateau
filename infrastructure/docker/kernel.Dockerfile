FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies and build
COPY package.json pnpm-workspace.yaml ./
COPY packages/engineering-os-kernel ./packages/engineering-os-kernel
COPY packages/engineering-governance ./packages/engineering-governance

RUN npm i -g pnpm && pnpm install
RUN pnpm --filter @axionyx/engineering-os-kernel build

FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app/packages/engineering-os-kernel/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["node", "dist/index.js"]
