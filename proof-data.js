const PROOF_OF_WORK = [
  {
    name: 'Shore', category: 'AI agents', year: '2026',
    summary: 'A plain-English wallet agent on Base. Tell it what you want on Telegram and it runs the actions from an ERC-4337 smart account, inside limits enforced on-chain by a policy the owner signed once.',
    stack: ['TypeScript', 'ERC-4337', 'Base', 'Telegram'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Vigilia', category: 'AI agents', year: '2026',
    summary: 'Scam and phishing checker, live on OKX.AI as agent #7072. Send a link, email text or a screenshot and get SAFE, SUSPICIOUS or CONFIRMED_SCAM with plain-language evidence. Deterministic checks pick the verdict; the AI only explains it.',
    stack: ['TypeScript', 'OKX.AI', 'Security'],
    liveUrl: 'https://www.okx.ai/agents/7072',
    codeUrl: 'https://github.com/mrfomoweb3/VIGILIA',
    caseStudy: null
  },
  {
    name: 'Cedar', category: 'AI agents', year: '2026',
    summary: 'An autonomous yield-routing agent that moves real CSPR on Casper. It watches DeFi pools, reasons with an LLM and signs its own reallocations through a safety pipeline where any check can veto the model. Every refusal is logged.',
    stack: ['Python', 'Rust', 'Casper', 'LLM'],
    liveUrl: 'https://trycedar.xyz',
    codeUrl: 'https://github.com/mrfomoweb3/Cedar',
    caseStudy: null
  },
  {
    name: 'Aval', category: 'AI agents', year: '2026',
    summary: 'Due diligence on AI agents for OKX.AI. Probes an agent’s endpoint, runs live tests with planted defects, sanity-checks pricing and on-chain reputation, then returns a signed, pay-per-call trust report.',
    stack: ['TypeScript', 'LangGraph', 'x402'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/Aval',
    caseStudy: null
  },
  {
    name: 'Mandato', category: 'AI agents', year: '2026',
    summary: 'A deterministic, read-only policy gate for AI-assisted Binance Spot trades. Turns a request into a strict intent, checks it against live market and account data, and writes a tamper-evident receipt. It never places orders.',
    stack: ['TypeScript', 'MCP', 'Cloudflare Workers'],
    liveUrl: 'https://mandato.samuelsuccess234.workers.dev',
    codeUrl: 'https://github.com/mrfomoweb3/mandato',
    caseStudy: null
  },
  {
    name: 'Compar', category: 'AI agents', year: '2026',
    summary: 'Counterparty-risk agent for the CROO Agent Store. Before a buyer locks funds it scores the other party, flags Sybil risk and returns a go/no-go with suggested escrow terms.',
    stack: ['Next.js', 'Base', 'USDC'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Perps Agent', category: 'AI agents', year: '2026',
    summary: 'An autonomous Hyperliquid perpetuals agent. It collects market data, proves itself on testnet first, and trades through an API wallet that can place orders but can never withdraw.',
    stack: ['Python', 'Hyperliquid'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'HackList MCP', category: 'AI agents', year: '2026',
    summary: 'An MCP server that gives Claude and ChatGPT live access to HackList’s hackathons, grants and bounties. It collapses duplicate listings, separates cash from credits, converts prizes to USD and filters out events you can’t enter.',
    stack: ['TypeScript', 'MCP'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/hacklist-mcp',
    caseStudy: null
  },
  {
    name: 'Solana LLM Wallet', category: 'AI agents', year: '2026',
    summary: 'A multi-user Telegram wallet that turns natural-language instructions into guarded Solana transactions: Jupiter swaps and DCA, staking, Pump.fun trades and a Naira off-ramp, with encrypted per-user keystores.',
    stack: ['TypeScript', 'Solana', 'Telegram', 'Groq'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/solana-llm-wallet',
    caseStudy: null
  },
  {
    name: 'Concordia', category: 'Web3 & DeFi', year: '2026',
    summary: 'A private, real-time decision room for small teams, built on Solana and MagicBlock’s TEE-backed Private Ephemeral Rollup. Everyone votes privately; only the shared consensus is revealed.',
    stack: ['Solana', 'Anchor', 'MagicBlock', 'Next.js'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/Concordia',
    caseStudy: null
  },
  {
    name: 'Kedere', category: 'Web3 & DeFi', year: '2026',
    summary: 'A transparent onchain levy fund for Nigerian residential estates. Every contribution is attributed to a unit, and no money moves without a plain-language proposal that residents can block during a public delay window.',
    stack: ['Solidity', 'Monad'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/kedere',
    caseStudy: null
  },
  {
    name: 'Driply', category: 'Web3 & DeFi', year: '2026',
    summary: 'A Nimiq Pay Mini App for sending family support as a controlled allowance. The sender locks funds and sets a release rate; the recipient can only withdraw what has unlocked so far.',
    stack: ['TypeScript', 'Nimiq Pay', 'Solidity'],
    liveUrl: 'https://mrfomoweb3.github.io/driply/',
    codeUrl: 'https://github.com/mrfomoweb3/driply',
    caseStudy: null
  },
  {
    name: 'StakeCare', category: 'Web3 & DeFi', year: '2026',
    summary: 'A self-custodial Nimiq Pay Mini App that checks your staking delegation, explains validator problems with evidence, and guides you through a safe redelegation.',
    stack: ['TypeScript', 'Nimiq Pay'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/Stake-Care',
    caseStudy: null
  },
  {
    name: 'WindowGuard', category: 'Web3 & DeFi', year: '2026',
    summary: 'A final execution check for five-minute BTC Event Contracts on dreamDEX. Right before the wallet opens it rechecks the market, time remaining, order-book freshness, depth and price limit.',
    stack: ['TypeScript', 'Somnia', 'Cloudflare Workers'],
    liveUrl: 'https://windowguard.samuelsuccess234.workers.dev/',
    codeUrl: 'https://github.com/mrfomoweb3/windowguard',
    caseStudy: null
  },
  {
    name: 'Veris', category: 'Web3 & DeFi', year: '2026',
    summary: 'Provenance for the AI era. Fingerprints a file, stores the original on Walrus and anchors an attestation on Sui mainnet, then tells anyone whether a file is authentic, modified or unknown.',
    stack: ['TypeScript', 'Sui', 'Walrus', 'Claude'],
    liveUrl: 'https://veris-bay-five.vercel.app',
    codeUrl: 'https://github.com/mrfomoweb3/veris',
    caseStudy: null
  },
  {
    name: 'Tape', category: 'Web3 & DeFi', year: '2026',
    summary: 'A market intelligence terminal for tokenized stocks on Robinhood Chain: unusual-activity rankings, a whale radar, wallet views and an NFT viewer with live OpenSea offers.',
    stack: ['Next.js', 'Robinhood Chain'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'MintLink', category: 'Web3 & DeFi', year: '2026',
    summary: 'A non-custodial, multi-chain NFT minting platform. Schedules timed mints across EVM chains and Solana with multi-wallet support, gas management, whitelist checks and paid subscriptions.',
    stack: ['Next.js', 'EVM', 'Solana', 'Supabase'],
    liveUrl: 'https://mint-link.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'The New Gen Society', category: 'Web3 & DeFi', year: '2026',
    summary: 'Site and contracts for a 2,693-piece NFT collection on Robinhood, including token, vault, vesting and treasury contracts built to share royalties with holders.',
    stack: ['Next.js', 'Solidity', 'Foundry'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: 'new-gen-society'
  },
  {
    name: 'Atakos', category: 'Web3 & DeFi', year: '2026',
    summary: 'Site for an onchain art collection of 222 forms, with a gallery and a WebXR AR preview that places a piece on your wall at its real size.',
    stack: ['Next.js', 'Three.js', 'WebXR'],
    liveUrl: 'https://atakos-gallery.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Giftly', category: 'Web3 & DeFi', year: '2026',
    summary: 'Private gift matching with fully homomorphic encryption. A recipient’s preferences are encrypted in the browser, friends suggest gifts, and a contract scores them without anyone seeing the answers.',
    stack: ['TypeScript', 'Fhenix', 'FHE'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'CloakNDA', category: 'Web3 & DeFi', year: '2025',
    summary: 'Confidential NDA management on-chain using Zama’s fhEVM, with separate views for creators, counterparties and auditors and an immutable audit trail.',
    stack: ['TypeScript', 'Zama fhEVM'],
    liveUrl: 'https://cloak-nda-dapp.vercel.app',
    codeUrl: 'https://github.com/mrfomoweb3/cloak-nda-dapp',
    caseStudy: null
  },
  {
    name: 'Secret Split', category: 'Web3 & DeFi', year: '2025',
    summary: 'Privacy-first group savings. Create a pot, invite friends and save together without exposing anyone’s balance.',
    stack: ['Next.js', 'ZK'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/Secret-Split',
    caseStudy: null
  },
  {
    name: 'Privy Market', category: 'Web3 & DeFi', year: '2025',
    summary: 'A concept for private prediction markets on Arcium’s confidential compute: predict in silence, win in truth.',
    stack: ['React', 'Arcium'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'MedVault Analytics', category: 'Web3 & DeFi', year: '2025',
    summary: 'A prototype healthcare analytics dashboard designed around fully homomorphic encryption, with a query builder, audit logging and synthetic data generators.',
    stack: ['Next.js', 'FHEVM'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/med',
    caseStudy: null
  },
  {
    name: 'Saros DLMM Demo', category: 'Web3 & DeFi', year: '2025',
    summary: 'Built for the Saros DLMM Demo Challenge: an LP position manager with live P&L, portfolio analytics and impermanent-loss tracking.',
    stack: ['TypeScript', 'Solana', 'Recharts'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/saros-dlmm-demo',
    caseStudy: null
  },
  {
    name: 'Nozzle', category: 'Web3 & DeFi', year: '2026',
    summary: 'A multi-chain gas splitter for funding many wallets with gas in one flow.',
    stack: ['React', 'Vite', 'EVM'],
    liveUrl: 'https://nozzle-two.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Sol Send', category: 'Web3 & DeFi', year: '2026',
    summary: 'A Solana bulk sender: airdrop SOL or SPL tokens to a list of recipients, with network selection and a fee preview.',
    stack: ['React', 'Solana'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Wallet Stories', category: 'Web3 & DeFi', year: '2025',
    summary: 'Generates a clean, shareable PnL card for any EVM or Solana address: wallet age, total received and sent, and net flow, exported as a PNG.',
    stack: ['React', 'EVM', 'Solana'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'NFT Mint Bot', category: 'Web3 & DeFi', year: '2025',
    summary: 'Custom contracts and scripts that mass-mint NFTs in a single transaction.',
    stack: ['Solidity', 'Hardhat', 'Ethers.js'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/NFT-Mint-Bot',
    caseStudy: null
  },
  {
    name: 'On-chain TodoList', category: 'Web3 & DeFi', year: '2025',
    summary: 'An early Solidity project: an on-chain to-do list using structs, mappings and events, deployed on Sepolia.',
    stack: ['Solidity', 'Sepolia'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/Simple-TodoList',
    caseStudy: null
  },
  {
    name: 'Juntos', category: 'Products & tools', year: '2026',
    summary: 'A private couples app with synced watch parties, shared memories, love notes and a countdown to the next time you’re together, in an editorial paper-and-ink style.',
    stack: ['React', 'Supabase', 'Realtime'],
    liveUrl: 'https://juntos-lyart.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'ClipVault', category: 'Products & tools', year: '2026',
    summary: 'A free macOS clipboard manager. It keeps every text, link and image you copy, lets you search the whole history, and pastes anything back with ⌘⇧V. Includes widgets and auto-updates.',
    stack: ['Swift', 'SwiftUI', 'macOS'],
    liveUrl: 'https://clip-vault-mrfomolabs.vercel.app',
    codeUrl: 'https://github.com/mrfomoweb3/ClipVault',
    caseStudy: null
  },
  {
    name: 'Custos', category: 'Products & tools', year: '2026',
    summary: 'A VS Code extension for .env safety: drift detection, secret scanning and end-to-end encrypted key sharing between developers.',
    stack: ['TypeScript', 'VS Code'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: 'custos'
  },
  {
    name: 'Auto-Cut Studio Licensing', category: 'Products & tools', year: '2026',
    summary: 'Licensing for a desktop video app: activate online once, then work fully offline using an Ed25519-signed, device-bound token. Stripe and crypto payments issue codes automatically.',
    stack: ['TypeScript', 'Ed25519', 'Stripe'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/auto-cut-studio',
    caseStudy: null
  },
  {
    name: 'Pactum', category: 'Products & tools', year: '2026',
    summary: 'Reservation protection for restaurants that cuts large-party no-shows without trapping guests, including handing a booking to whoever actually attends.',
    stack: ['TypeScript', 'Cloudflare Workers'],
    liveUrl: 'https://pactum-delta.vercel.app',
    codeUrl: 'https://github.com/mrfomoweb3/Pactum',
    caseStudy: null
  },
  {
    name: 'ShiftShield', category: 'Products & tools', year: '2026',
    summary: 'Heat-aware crew scheduling. Combines street-level temperature data with crew and job constraints to move heavy outdoor work out of the hottest hours, then produces a crew safety briefing.',
    stack: ['TypeScript', 'FortyGuard', 'Cloudflare Workers'],
    liveUrl: 'https://shiftshield.samuelsuccess234.workers.dev/',
    codeUrl: 'https://github.com/mrfomoweb3/shiftshield',
    caseStudy: null
  },
  {
    name: 'KourierOne', category: 'Products & tools', year: '2026',
    summary: 'A logistics comparison platform. Compare rates from courier providers, book in seconds and track deliveries, with customer and admin dashboards.',
    stack: ['Next.js', 'Supabase', 'Paystack'],
    liveUrl: 'https://kourierone.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'FHA Quick Response', category: 'Products & tools', year: '2025',
    summary: 'A support ticketing system with role-based access, departments, file attachments, real-time updates and reporting.',
    stack: ['Next.js', 'Supabase', 'Tailwind'],
    liveUrl: 'https://fha-ticketing-system.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Bio-Sorter', category: 'Products & tools', year: '2026',
    summary: 'An internal automation tool that cleans and processes spreadsheets: sorting, attendance, abbreviations, formatting and more.',
    stack: ['Next.js', 'TypeScript'],
    liveUrl: 'https://bio-sorter.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Hire Beam', category: 'Products & tools', year: '2025',
    summary: 'A job board with listings, applications, user profiles and an admin panel for managing jobs and applicants.',
    stack: ['React', 'Supabase'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Thread Weaver', category: 'Products & tools', year: '2026',
    summary: 'Turns any uploaded image into generative string art, with controls for the thread pattern.',
    stack: ['React', 'Canvas'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Cupid Letters', category: 'Products & tools', year: '2026',
    summary: 'Write six poetic pages for your Valentine and share a beautiful love letter that ends with one question.',
    stack: ['React', 'Supabase'],
    liveUrl: 'https://cupidletters.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'BigRay Mentorship', category: 'Products & tools', year: '2026',
    summary: 'A mentorship platform with student sign-in and an admin dashboard for content and live sessions.',
    stack: ['Next.js', 'Supabase'],
    liveUrl: 'https://mentorship-bigray.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'DeFi Startup Pack', category: 'Products & tools', year: '2025',
    summary: 'A curated hub of the best DeFi analytics, research and discovery tools for crypto researchers and traders.',
    stack: ['React', 'Vite'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Gamdom Man Crash', category: 'Games', year: '2026',
    summary: 'A crash-game concept for Gamdom. The 3D hero launches from a rooftop and his light trail draws the multiplier curve as he climbs into space. Cash out before he flies away. Play money only.',
    stack: ['Three.js', 'HTML'],
    liveUrl: 'https://gamdom-man-crash.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Rampster', category: 'Games', year: '2026',
    summary: 'A play-money 3D crash game. A driverless sports car loops a ramp and flies over traffic on thrusters while the multiplier climbs. Rounds use SHA-256 seeds and can be verified.',
    stack: ['TypeScript', 'Three.js'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Degen World', category: 'Games', year: '2026',
    summary: 'A Web3-culture life sim. Farm airdrops, trade memecoins, enter hackathons, drive an endless highway, buy a house and climb from Plankton to Whale. Fictional economy only.',
    stack: ['Three.js', 'Preact'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Hood Flap', category: 'Games', year: '2026',
    summary: 'A responsive Hoodmallard arcade game with leaderboards, reward drops and bot protection.',
    stack: ['Next.js', 'Phaser', 'Supabase'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Game Hub', category: 'Games', year: '2025',
    summary: 'A game-jam hub with three browser games: Bubble Pop, Casino Slots and a match-3 Fruit Swipe, with Web Audio sound effects.',
    stack: ['Next.js', 'Solana'],
    liveUrl: 'https://scrolly-gamejam.vercel.app',
    codeUrl: 'https://github.com/mrfomoweb3/scrolly-gamejam',
    caseStudy: null
  },
  {
    name: 'Aztec 2048', category: 'Games', year: '2025',
    summary: 'An Aztec-themed 2048 with touch and keyboard controls, per-player history and a leaderboard.',
    stack: ['React'],
    liveUrl: 'https://aztec-2048-game.vercel.app',
    codeUrl: 'https://github.com/mrfomoweb3/Aztec_2048',
    caseStudy: null
  },
  {
    name: 'Aztec Privacy Quiz', category: 'Games', year: '2025',
    summary: 'An animated 30-question zero-knowledge quiz with score-based certificates and sharing to X.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://aztec-quiz.vercel.app',
    codeUrl: 'https://github.com/mrfomoweb3/Aztec-Quiz',
    caseStudy: null
  },
  {
    name: 'Aztec Mainnet Predictor', category: 'Games', year: '2025',
    summary: 'A community game for guessing Aztec’s mainnet date, with shareable predictions.',
    stack: ['Next.js'],
    liveUrl: 'https://aztec-mainnet-predictor.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'RareBloom Raffle Bot', category: 'Bots & automation', year: '2026',
    summary: 'A Discord-native raffle app for RareBloomDAO with cryptographically random draws, role multipliers, restart-safe endings, exports and an append-only audit trail.',
    stack: ['TypeScript', 'Discord', 'PostgreSQL'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'RBD × FOMO Activity', category: 'Bots & automation', year: '2026',
    summary: 'A Discord Activity where admins post time-limited botting opportunities and verified members submit burner wallets, encrypted with AES-256-GCM and auto-expired.',
    stack: ['JavaScript', 'Discord Activities'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Momo Wallet Submit', category: 'Bots & automation', year: '2026',
    summary: 'A one-button Discord bot for role-gated wallet collection that routes each submission to the right allowlist tier, with dedupe enforced by Postgres.',
    stack: ['Python', 'Discord', 'Supabase'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Discord Wallet Bot', category: 'Bots & automation', year: '2026',
    summary: 'Collects EVM and Solana wallet addresses through slash commands, one per user and per wallet, and stores them in Google Sheets.',
    stack: ['TypeScript', 'Discord', 'Google Sheets'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Telegram Support Bot', category: 'Bots & automation', year: '2026',
    summary: 'A support-ticket bot that relays private user chats into forum topics in a staff group, where the team replies and closes tickets.',
    stack: ['TypeScript', 'Telegram', 'Prisma'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'NFT Wallet Tracker', category: 'Bots & automation', year: '2026',
    summary: 'A multi-user Telegram bot that tracks NFT wallets for mints, buys and sells, with whale and price alerts, portfolio value, snipe mode and optional copy-buying.',
    stack: ['TypeScript', 'Telegram', 'Ethereum'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/nft-wallet-tracker',
    caseStudy: null
  },
  {
    name: 'Polymarket Market Maker', category: 'Bots & automation', year: '2026',
    summary: 'A passive market-making bot for Polymarket with post-only orders, a multi-signal fair-value engine, risk limits and Prometheus metrics.',
    stack: ['Rust', 'Polygon'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Robinhood Chain Holder Exporter', category: 'Bots & automation', year: '2026',
    summary: 'Exports holder lists from three NFT collections on Robinhood Chain and builds a deduplicated presale allowlist.',
    stack: ['Python', 'Alchemy'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Alpha Labs Converter', category: 'Bots & automation', year: '2025',
    summary: 'A slash-command Discord bot that converts any crypto amount to USD in real time using CoinGecko.',
    stack: ['Python', 'Discord'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/Alphalabs_converter_bot',
    caseStudy: null
  },
  {
    name: 'URL Shortener', category: 'Bots & automation', year: '2023',
    summary: 'An early Python mini project that shortens long URLs through an API.',
    stack: ['Python'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/python-url-shortner',
    caseStudy: null
  },
  {
    name: 'Early Men Origins', category: 'Sites & brands', year: '2026',
    summary: 'Raffle site for Earlymen with X sign-in, server-validated applications, a four-stage campaign and an auditable seeded draw.',
    stack: ['Next.js', 'Supabase', 'X OAuth'],
    liveUrl: 'https://www.earlymenorigins.xyz/',
    codeUrl: null,
    caseStudy: 'early-men'
  },
  {
    name: 'Hoodmallard', category: 'Sites & brands', year: '2026',
    summary: 'Collection site for Hoodmallard (“Different bills. Same flock.”) with lore chapters, a gallery, whitelist applications and an admin control room for the draw.',
    stack: ['Next.js', 'GSAP', 'Supabase'],
    liveUrl: 'https://hood-mallard.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Rare Bloom DAO', category: 'Sites & brands', year: '2026',
    summary: 'Community site and application flow for Rare Bloom DAO, with an admin view for submissions.',
    stack: ['React', 'Supabase'],
    liveUrl: 'https://rbd-liart.vercel.app',
    codeUrl: null,
    caseStudy: 'rare-bloom'
  },
  {
    name: 'Lost N Found', category: 'Sites & brands', year: '2026',
    summary: 'NFT collection site with a video intro, storybook lore, a three-step whitelist application, referral leaderboard and admin export.',
    stack: ['Vite', 'Supabase'],
    liveUrl: 'https://l0st-n-f0und.vercel.app',
    codeUrl: null,
    caseStudy: 'lost-n-found'
  },
  {
    name: 'Tessonchain', category: 'Sites & brands', year: '2026',
    summary: 'Personal portfolio for a Web3 content creator and digital artist.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://tessonchain.vercel.app',
    codeUrl: null,
    caseStudy: 'tessonchain'
  },
  {
    name: 'Cyber Raccoons', category: 'Sites & brands', year: '2026',
    summary: 'Site for the Cyber Raccoons NFT collection with MDX updates and a whitelist application backed by Supabase.',
    stack: ['Next.js', 'Supabase', 'Playwright'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'The Renaissance', category: 'Sites & brands', year: '2025',
    summary: 'A cyberpunk NFT whitelist checker with a video background, wallet lookup and an admin panel.',
    stack: ['JavaScript', 'MongoDB'],
    liveUrl: 'https://the-renaissance.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Anon Panku Checker', category: 'Sites & brands', year: '2025',
    summary: 'Whitelist verification site for Anon Panku with Discord-linked eligibility checks and an admin panel.',
    stack: ['Next.js', 'Supabase'],
    liveUrl: 'https://anonpanku-checker.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Spotlight by FOMO', category: 'Sites & brands', year: '2026',
    summary: 'A 3D gallery for The Beaks where people upload OBJ models for review before they join the gallery.',
    stack: ['Three.js', 'Node.js'],
    liveUrl: 'https://spotlight-byfomo.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Beaks Museum', category: 'Sites & brands', year: '2026',
    summary: 'An interactive museum page for The Beaks with texture filters and music.',
    stack: ['React', 'Vite'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'FLO 24-7 Security', category: 'Sites & brands', year: '2026',
    summary: 'Website for a security company: services, testimonials and contact.',
    stack: ['Next.js'],
    liveUrl: 'https://flo-24-7.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Eleve by Kech', category: 'Sites & brands', year: '2026',
    summary: 'Website for a study-abroad consultancy covering university admissions, visas and partners.',
    stack: ['Next.js'],
    liveUrl: 'https://eleve-by-kech.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Movix', category: 'Sites & brands', year: '2026',
    summary: 'Marketing site, blog and sign-in for Movix, an automation platform for freight brokers, 3PLs and carriers.',
    stack: ['Next.js', 'NextAuth'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Stellar Horizons', category: 'Sites & brands', year: '2026',
    summary: 'A cinematic landing page for a spaceship company, with parallax, a starfield, animated timelines and secure sign-in.',
    stack: ['Next.js', 'Prisma', 'NextAuth'],
    liveUrl: 'https://stellar-horizon.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'ORE AI', category: 'Sites & brands', year: '2026',
    summary: 'Landing site for ORE AI, a Solana wallet agent you talk to like a friend.',
    stack: ['Next.js'],
    liveUrl: 'https://ore-ai-one.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Zukhruf', category: 'Sites & brands', year: '2026',
    summary: 'Video portfolio for a content creator, with an archive and an admin page for managing videos.',
    stack: ['React', 'Vite'],
    liveUrl: 'https://zukhruf.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Nipherme', category: 'Sites & brands', year: '2026',
    summary: 'A designer portfolio with a custom cursor, process and testimonials sections.',
    stack: ['Next.js'],
    liveUrl: 'https://nipherme.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'BigRay', category: 'Sites & brands', year: '2025',
    summary: 'Personal site for Big Ray, a Web3 builder, writer and operator.',
    stack: ['React', 'Vite'],
    liveUrl: 'https://bigray0xeth.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Success.dev', category: 'Sites & brands', year: '2026',
    summary: 'A developer portfolio with projects and certificates.',
    stack: ['HTML', 'JavaScript'],
    liveUrl: 'https://success-dev-sigma.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Nddic', category: 'Sites & brands', year: '2026',
    summary: 'An artist carousel with a built-in music player and a full artist catalogue.',
    stack: ['JavaScript'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'ENI', category: 'Sites & brands', year: '2025',
    summary: 'A soft, elegant personality-brand landing page with an embedded playlist.',
    stack: ['Next.js'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Aztec Brand Kit', category: 'Sites & brands', year: '2025',
    summary: 'A quickstart for the Aztec brand kit: colors, assets and media links in one place.',
    stack: ['Next.js'],
    liveUrl: 'https://aztec-branding-guide.vercel.app',
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Sentient Roles', category: 'Sites & brands', year: '2025',
    summary: 'A guide to Sentient’s contribution role system and roadmap.',
    stack: ['HTML'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Rialo Guide', category: 'Sites & brands', year: '2025',
    summary: 'A community guide to Rialo’s roles for members, event winners and new joiners.',
    stack: ['Next.js'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'Kite AI SBT Winners', category: 'Sites & brands', year: '2025',
    summary: 'An animated reveal page for Kite AI’s SBT winners.',
    stack: ['React', 'Motion'],
    liveUrl: null,
    codeUrl: null,
    caseStudy: null
  },
  {
    name: 'OLY Token Audit', category: 'Security & research', year: '2025',
    summary: 'A bug-bounty submission documenting 18 vulnerabilities in the OLY token contract, including 7 critical, each with a runnable proof-of-concept exploit.',
    stack: ['Solidity', 'JavaScript'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/oly-security-vulnerabilities',
    caseStudy: null
  },
  {
    name: 'Solana Gaming Protocol Audit', category: 'Security & research', year: '2025',
    summary: 'A security audit of a Solana win-to-earn FPS protocol: 2 critical and 4 high-severity findings with recommended fixes.',
    stack: ['Rust', 'Solana'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/Solana-Smart-Contract-Improvement-Audit-for-Gaming-Protocol',
    caseStudy: null
  },
  {
    name: 'Gensyn Node Guide', category: 'Security & research', year: '2025',
    summary: 'A step-by-step guide to running a Gensyn RL Swarm node on Mac, Linux or a rented VPS.',
    stack: ['Guide'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/Gensyn-Node-Guide-',
    caseStudy: null
  },
  {
    name: 'Aztec Validator Guide', category: 'Security & research', year: '2025',
    summary: 'A walkthrough for joining the Aztec validator set and earning the Explorer role during the adversarial testnet.',
    stack: ['Guide'],
    liveUrl: null,
    codeUrl: 'https://github.com/mrfomoweb3/Aztec-Adversarial-testnet',
    caseStudy: null
  }
];
