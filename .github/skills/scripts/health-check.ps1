# Health check script for Windows (PowerShell)
$ErrorActionPreference = "Stop"

Write-Host "== Git status =="
git status

# Detect package manager
$pm = "npm"
if (Test-Path "pnpm-lock.yaml") { $pm = "pnpm" }
elseif (Test-Path "yarn.lock") { $pm = "yarn" }

Write-Host "== Package manager detected: $pm =="

function Run-Step($name, $cmd) {
  Write-Host "`n== $name ==" -ForegroundColor Cyan
  iex $cmd
}

# Install
if ($pm -eq "pnpm") { Run-Step "Install" "pnpm install" }
elseif ($pm -eq "yarn") { Run-Step "Install" "yarn install --frozen-lockfile" }
else { Run-Step "Install" "npm ci" }

# Read available scripts quickly
$scripts = (node -e "const p=require('./package.json'); console.log(Object.keys(p.scripts||{}).join(','))")

# Lint
if ($scripts -match "lint") { Run-Step "Lint" "$pm run lint" }

# Typecheck
if ($scripts -match "typecheck") { Run-Step "Typecheck" "$pm run typecheck" }

# Test
if ($scripts -match "test") { Run-Step "Test" "$pm test" }

# Build
if ($scripts -match "build") { Run-Step "Build" "$pm run build" }

Write-Host "`n✅ Health check finished. If something failed, fix and rerun this script." -ForegroundColor Green
