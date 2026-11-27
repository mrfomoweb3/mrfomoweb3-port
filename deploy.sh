#!/usr/bin/env bash
# Push the portfolio to GitHub (as mrfomoweb3) and deploy it to Vercel production.
# Usage:  ./deploy.sh "what changed"
set -euo pipefail
cd "$(dirname "$0")"

MSG="${1:-Update portfolio}"

# Commit as mrfomoweb3 in this repo only
git config user.name "mrfomoweb3"
# GitHub noreply address: always maps to the mrfomoweb3 account, so Vercel recognises the author
git config user.email "88100982+mrfomoweb3@users.noreply.github.com"

# 1) Commit anything that changed and push to GitHub
git add -A
if ! git diff --cached --quiet; then
  git commit -m "$MSG"
fi
git push origin main

# 2) Deploy to Vercel production; this replaces the current live version
#    First run: log in and link the project when asked
vercel whoami >/dev/null 2>&1 || vercel login
vercel deploy --prod --yes

echo
echo "Live: https://mrfomoweb3-port.vercel.app/#experience"
