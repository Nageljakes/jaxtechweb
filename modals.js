/* Modal copy for the skills catalogue and the loop diagram.
   Split out of script.js because it is 72 KB that four of the six
   pages never open a single modal from. Loaded only where needed. */
window.MODAL_DATA = {
    'unified': {
        icon: '🎛️',
        title: 'Unified Control',
        content: `
            <h4>The End of App Clutter</h4>
            <p>Imagine standing in your kitchen, frustrated by juggling six different smart-device apps on your phone just to set the mood. Jaxtech eliminates this by visually combining all your disparate systems into one simple, elegant interface.</p>
            <h4>A Coordinated Ecosystem</h4>
            <p>We connect lights, security cameras, blinds, irrigation, electricity monitoring, and household appliances into one intelligent central smart-home system. Everything communicates together to create a seamless, cinematic living experience in your modern home.</p>
        `
    },
    'reliability': {
        icon: '🔋',
        title: 'Local Reliability',
        content: `
            <h4>Immune to Load-Shedding</h4>
            <p>When the suburb goes dark, your Jaxtech-equipped home remains illuminated and fully operational. By seamlessly integrating with your inverter and UPS power, your cameras, Wi-Fi, sensors, and automations continue running normally.</p>
            <h4>Offline Operation</h4>
            <p>A damaged fibre cable won't take your home offline. Our locally-hosted systems continue controlling lights, security cameras, irrigation, and appliances completely independent of cloud servers or internet access. It's a true offline-first architecture.</p>
        `
    },
    'energy': {
        icon: '⚡',
        title: 'Energy Management',
        content: `
            <h4>Real-Time Electricity Monitoring</h4>
            <p>A whole-house electricity monitor installed inside your distribution board gives you a live dashboard of power consumption from your geyser, oven, pool pump, and household plugs.</p>
            <h4>Intelligent Cost Reduction</h4>
            <p>Identify your largest power consumers at a glance. The system detects unusually high electricity use during the night and sends a clear WhatsApp alert identifying the responsible appliance, helping you actively reduce your monthly electricity cost.</p>
        `
    },
    'geyser': {
        icon: '♨️',
        title: 'Intelligent Geyser',
        content: `
            <h4>Location-Aware Heating</h4>
            <p>As you leave work, your phone automatically notifies the home. The Jaxtech system calculates your arrival time and begins heating water so it's perfectly ready the moment you walk through the door.</p>
            <h4>Adaptive Schedules</h4>
            <p>Unnecessary electricity consumption is prevented. The system adapts automatically to weekday, weekend, and school holiday routines, and allows you to simply WhatsApp "Switch on the geyser" for instant local control.</p>
        `
    },
    'water': {
        icon: '💧',
        title: 'Water Management',
        content: `
            <h4>Weather-Aware Irrigation</h4>
            <p>Before watering a lush green lawn, the automation checks the current weather, forecast rainfall, and live soil-moisture sensors. If rain is approaching, the watering cycle is cancelled to conserve water.</p>
            <h4>Zoned Precision</h4>
            <p>Different sections of your garden are watered independently based on their individual soil-moisture readings, plant types, and exposure to sunlight, all trackable via a detailed water-management dashboard.</p>
        `
    },
    'lighting': {
        icon: '💡',
        title: 'Presence Lighting',
        content: `
            <h4>True Human Presence</h4>
            <p>Unlike ordinary motion sensors that turn the lights off while you sit still reading a book, our advanced presence sensors detect subtle movements like breathing to keep the room perfectly illuminated.</p>
            <h4>Contextual Illumination</h4>
            <p>Low-level pathway lights activate automatically to guide a child down a dark hallway without illuminating the entire house. As you leave, room-by-room detection confirms the property is empty and switches off unnecessary lights.</p>
        `
    },
    'climate': {
        icon: '🌡️',
        title: 'Automated Climate',
        content: `
            <h4>Sun-Tracking Blinds</h4>
            <p>Motorised blinds adjust automatically according to the exact position of the afternoon sun. They close on the western side during a hot summer afternoon to block harsh sunlight and reduce indoor heat.</p>
            <h4>Harmonious Comfort</h4>
            <p>During cold winter mornings, blinds open to allow warm sunlight into the living room. The system combines sunlight, indoor temperature, and time-of-day information to adjust climate control entirely without human input.</p>
        `
    },
    'security': {
        icon: '🛡️',
        title: 'AI Security',
        content: `
            <h4>Beyond Motion Detection</h4>
            <p>Local AI watches your driveway, completely ignoring moving tree branches, fluttering leaves, or a moth near the lens. It only alerts you when a real person or vehicle is detected.</p>
            <h4>Facial Recognition</h4>
            <p>Existing CCTV cameras gain advanced recognition capabilities. The system can identify a familiar family member arriving at the gate and send a friendly message, while unknown individuals trigger detailed threat reports.</p>
        `
    },
    'alerts': {
        icon: '📱',
        title: 'Actionable Alerts',
        content: `
            <h4>Meaningful Notifications</h4>
            <p>Say goodbye to hundreds of useless motion alerts. When an unknown person enters the property at 2 AM, it triggers urgent lights, camera recording, and a specific, detailed security alert.</p>
            <h4>Armed-Response Integration</h4>
            <p>In emergencies, structured threat reports can be sent directly to an armed-response control room, detailing the exact number of intruders, their location on the property, and relevant camera images.</p>
        `
    },
    'concierge': {
        icon: '💬',
        title: 'AI Concierge',
        content: `
            <h4>Your Home on WhatsApp</h4>
            <p>Wake up to a concise morning briefing showing weather, electricity use, and calendar appointments. Ask your home if the gate is closed or the alarm is armed, and receive a clear status response immediately.</p>
            <h4>Natural Voice Commands</h4>
            <p>Send a natural voice note asking the assistant to "prepare the house for guests," and watch as selected lights, blinds, and climate settings perfectly adjust to the occasion.</p>
        `
    },
    'finance': {
        icon: '📊',
        title: 'Financial Org',
        content: `
            <h4>Automated Budgeting</h4>
            <p>Photograph a grocery receipt and upload it via WhatsApp. The AI extracts the store, date, products, and prices, automatically categorising purchases into groceries, toiletries, and maintenance.</p>
            <h4>Smart Shopping Assistant</h4>
            <p>The system learns your normal shopping patterns, compares online promotional leaflets from major supermarkets, and generates a master shopping list showing the cheapest store for each item.</p>
        `
    },
    'admin': {
        icon: '📅',
        title: 'Digital Admin',
        content: `
            <h4>Inbox & Calendar Mastery</h4>
            <p>The local AI safely analyses your crowded inbox, separating urgent messages from spam, and automatically files utility bills into organised local folders.</p>
            <h4>Family Organisation</h4>
            <p>Upload a school newsletter and the AI extracts sports days and outings, adding them to a unified family calendar complete with predicted travel times based on current traffic conditions.</p>
        `
    },
    'custom': {
        icon: '⚙️',
        title: 'Custom Integrations',
        content: `
            <h4>Predictive Maintenance</h4>
            <p>If a borehole pump shows abnormal power consumption, the system identifies the fault, checks your calendar for a work-from-home day, and drafts an email to a technician for your approval.</p>
            <h4>Health & Kitchen Integration</h4>
            <p>Photograph your pantry contents, and the AI suggests family meals based on available ingredients and expiry dates, reducing waste while syncing with data from your smartwatches and health diaries.</p>
        `
    },
    'safety': {
        icon: '🔒',
        title: 'Human Safety',
        content: `
            <h4>Human-in-the-Loop Control</h4>
            <p>When the plumber arrives, the AI asks you on WhatsApp: "The plumber is at the gate. Shall I open it?" The gate remains securely closed until you explicitly tap approve.</p>
            <h4>Privacy you can actually check</h4>
            <p>On an on-premises install, personal information, camera footage, emails and household records are processed on a local AI server on the property and don't travel to an overseas cloud. Where a project does use hosted inference — which is often the sensible trade-off — you're told exactly which data leaves and where it goes, before anything is built. No vague assurances either way.</p>
        `
    },
    'arch_perception': {
        icon: '👁️',
        title: 'Perception Layer',
        content: `
            <h4>Context & Intent Parsing</h4>
            <p>The Perception Layer acts as the sensory system for your home. It continuously monitors environmental sensor data, security cameras, incoming WhatsApp messages, and emails.</p>
            <p>By translating raw data and natural human language into structured context, it perfectly understands your intent and the current state of the household before passing it to the Core Brain.</p>
        `
    },
    'arch_brain': {
        icon: '🧠',
        title: 'Core Brain',
        content: `
            <h4>LLM Reasoning &amp; Planning</h4>
            <p>At the centre of every Tiny agent sits a Large Language Model doing the actual thinking: breaking a request into steps, deciding which tool to reach for next, and adapting when a step doesn't go to plan.</p>
            <p>Where that model runs is a deployment choice, and it's worth being straight about it. The chat on this site runs on <strong>hosted cloud inference</strong>. For an agent built for you, the same brain can run on hardware on your own premises instead — slower and more expensive to set up, but nothing leaves the building. Sensitive work gets the local option; most business automation doesn't need it.</p>
        `
    },
    'arch_tools': {
        icon: '🛠️',
        title: 'Tool Execution',
        content: `
            <h4>API & CLI Hooks</h4>
            <p>This is how the intelligence interacts with the physical world. The Tool Execution node dynamically triggers smart relays, adjusts motorised blinds, and manages your inverter.</p>
            <p>It acts autonomously to execute the Core Brain's plans, securely orchestrating both local hardware and external services through authenticated API connections.</p>
        `
    },
    'arch_memory': {
        icon: '🗄️',
        title: 'Memory Store',
        content: `
            <h4>Context &amp; History</h4>
            <p>An agent that forgets everything between runs isn't much use. The memory store keeps the context an agent needs to do its job well: your routines and preferences, what it did last time, and the reference material it should answer from rather than guessing.</p>
            <p>For an on-premises deployment this sits in a database on your own hardware, so records and camera footage stay on the property. For a cloud deployment it lives in managed storage under your account. Either way it's your data, and you decide what the agent is allowed to retain.</p>
        `
    },
        'skill_agents': {
        icon: '🤖',
        title: 'Autonomous AI Agents',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">This allows the system to run powerful artificial intelligence assistants locally, giving them the ability to reason, write code, and act autonomously without relying on the cloud.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>antigravity-cli</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>blackbox</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>claude-code</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>codex</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>computer-use</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>grok</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>hermes-agent</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>honcho</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>opencode</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>openhands</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>yuanbao</span>
            </div>
        `
    },
    'skill_blockchain': {
        icon: '🔗',
        title: 'Blockchain & Web3',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Equips the system with the ability to interact with decentralized networks, manage smart contracts, and track cryptocurrency ecosystems.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>evm</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>hyperliquid</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>solana</span>
            </div>
        `
    },
    'skill_comm': {
        icon: '📡',
        title: 'Communication & Protocol',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Defines the strict communication rules and messaging frameworks the AI uses to communicate clearly and effectively.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>one-three-one-rule</span>
            </div>
        `
    },
    'skill_design': {
        icon: '🎨',
        title: 'Creative & Design',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Provides the system with a massive suite of creative tools for generating artwork, designing user interfaces, creating 3D models, and composing music.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>architecture-diagram</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>ascii-art</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>ascii-video</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>audiocraft-audio-generation</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>baoyu-article-illustrator</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>baoyu-comic</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>baoyu-infographic</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>blender-mcp</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>claude-design</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>comfyui</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>concept-diagrams</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>creative-ideation</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>design-md</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>excalidraw</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>heartmula</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>humanizer</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>hyperframes</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>kanban-video-orchestrator</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>manim-video</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>meme-generation</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>p5js</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>pixel-art</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>popular-web-designs</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>pretext</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>sketch</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>songwriting-and-ai-music</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>tldraw-offline</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>touchdesigner-mcp</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>unreal-mcp</span>
            </div>
        `
    },
    'skill_data': {
        icon: '📈',
        title: 'Data Science & DevOps',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Enables the system to securely manage its own virtual environments, analyze data, and run isolated tests without putting your home network at risk.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>jupyter-notebook</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>docker-management</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>inference-sh-cli</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>local-agent-security</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>pinggy-tunnel</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>watchers</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>adversarial-ux-test</span>
            </div>
        `
    },
    'skill_email': {
        icon: '✉️',
        title: 'Email & Communication',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Allows the AI to securely draft, filter, and organize your emails or send automated notifications on your behalf.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>agentmail</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>himalaya</span>
            </div>
        `
    },
    'skill_finance': {
        icon: '📊',
        title: 'Finance & Valuation',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Empowers the system to build complex financial models, analyze stock markets, and generate investment presentations.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>3-statement-model</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>comps-analysis</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>dcf-model</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>excel-author</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>lbo-model</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>merger-model</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>pptx-author</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>stocks</span>
            </div>
        `
    },
    'skill_gaming': {
        icon: '🎮',
        title: 'Gaming & Emulation',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Gives the AI the ability to host and manage private multiplayer game servers or interact with emulated gaming environments.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>minecraft-modpack-server</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>pokemon-player</span>
            </div>
        `
    },
    'skill_git': {
        icon: '🐙',
        title: 'GitHub & Version Control',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Provides the system with professional software engineering capabilities to manage code repositories, review code, and fix bugs autonomously.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>codebase-inspection</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>github-auth</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>github-code-review</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>github-issues</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>github-pr-workflow</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>github-repo-management</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>gh-address-comments</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>gh-fix-ci</span>
            </div>
        `
    },
    'skill_health': {
        icon: '🧬',
        title: 'Health & Life Sciences',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Allows the AI to assist with clinical assessments, plan personalized fitness and nutrition regimes, and analyze biometric data.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>fitness-nutrition</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>neuroskill-bci</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>bioinformatics</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>drug-discovery</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>digital-health-clinical-assessment</span>
            </div>
        `
    },
    'skill_mcp': {
        icon: '🔌',
        title: 'Model Context Protocol',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">The core framework that allows all of these different tools to securely connect and talk to the AI brain.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>fastmcp</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>mcp-builder</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>mcp-oauth-remote-gateway</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>mcporter</span>
            </div>
        `
    },
    'skill_media': {
        icon: '🎬',
        title: 'Media & Video',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Provides tools to search, analyze, summarize, and generate dynamic video content or track objects within a video feed.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>gif-search</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>songsee</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>youtube-content</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>vss-ask-video</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>vss-deploy-detection-tracking</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>vss-generate-video-report</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>vss-query-analytics</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>vss-summarize-video</span>
            </div>
        `
    },
    'skill_mlops': {
        icon: '⚙️',
        title: 'MLOps & Fine-Tuning',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Advanced tools that allow the system to train, optimize, and run massive AI models directly on its own hardware instead of relying on the internet.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>axolotl</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>chroma</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>clip</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>distributed-llm-pretraining</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>dspy</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>evaluating-llms-harness</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>faiss</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>fine-tuning-with-trl</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>guidance</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>huggingface-accelerate</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>huggingface-hub</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>huggingface-tokenizers</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>instructor</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>lambda-labs-gpu-cloud</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>llama-cpp</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>llava</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>modal-serverless-gpu</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>nemo-curator</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>obliteratus</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>optimizing-attention-flash</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>outlines</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>peft-fine-tuning</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>pinecone</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>pytorch-fsdp</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>pytorch-lightning</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>qdrant-vector-search</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>segment-anything-model</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>serving-llms-vllm</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>simpo-training</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>slime-rl-training</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>sparse-autoencoder-training</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>stable-diffusion-image-gen</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>tensorrt-llm</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>unsloth</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>weights-and-biases</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>whisper</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>trl-training</span>
            </div>
        `
    },
    'skill_pay': {
        icon: '💳',
        title: 'Payments & E-Commerce',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Enables the system to securely manage online storefronts, process payments, and track digital commerce activities.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>mpp-agent</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>stripe-link-cli</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>stripe-projects</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>shop</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>shopify</span>
            </div>
        `
    },
    'skill_prod': {
        icon: '📁',
        title: 'Productivity & Docs',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Integrates the system with your daily workflow, allowing it to organize spreadsheets, write documents, and manage your calendar and meetings.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>airtable</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>auto-hub-workflow</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>canvas</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>docx</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>google-workspace</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>here.now</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>maps</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>memento-flashcards</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>nano-pdf</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>notion</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>obsidian</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>ocr-and-documents</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>pdf</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>powerpoint</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>siyuan</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>teams-meeting-pipeline</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>telephony</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>xlsx</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>spreadsheet</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>slides</span>
            </div>
        `
    },
    'skill_research': {
        icon: '🔍',
        title: 'Research & Web Mining',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Grants the AI the ability to conduct deep, autonomous web investigations, scrape data, and compile comprehensive research papers on any topic.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>arxiv</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>blogwatcher</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>darwinian-evolver</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>domain-intel</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>duckduckgo-search</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>gitnexus-explorer</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>llm-wiki</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>osint-investigation</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>parallel-cli</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>pinecone-research</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>polymarket</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>qmd</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>research-paper-writing</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>scrapling</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>searxng-search</span>
            </div>
        `
    },
    'skill_sec': {
        icon: '🛡️',
        title: 'Security & OSINT',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Equips the system with cybersecurity tools to audit networks, monitor for threats, and manage passwords securely.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>1password</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>godmode</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>oss-forensics</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>sherlock</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>unbroker</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>web-pentest</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>security-best-practices</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>security-ownership-map</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>security-threat-model</span>
            </div>
        `
    },
    'skill_iot': {
        icon: '🏠',
        title: 'Smart Home & IoT',
        content: `
            <p class="kicker" style="margin-bottom:.6rem;">The Jaxtech difference</p>
            <h2 style="margin-bottom:1rem;">Your home, thinking locally.</h2>
            <p style="color: var(--text-muted); margin-bottom: 1.6rem; line-height: 1.7;">One intelligent system that runs your energy, water, security, geyser and comfort — and keeps working when the power and the fibre don't. A dedicated Jaxtech controller lives on your property and coordinates everything, running on your inverter or UPS, with private local AI that doesn't need the internet to think. <strong>Works with the gear you already own.</strong></p>

            <div class="pillars" style="margin-bottom: 1.8rem;">
                <article class="pillar glass">
                    <div class="pillar-ico">⚡</div>
                    <h3>Energy that pays you back</h3>
                    <p style="color: var(--text-muted); font-size: .92rem; line-height: 1.6; margin-top: .5rem;">Live circuit-level monitoring shows exactly what's costing you. Then the system acts on it — heating the geyser off solar surplus, holding the pool pump for cheaper hours, and shedding non-essentials before your inverter has to.</p>
                </article>
                <article class="pillar glass">
                    <div class="pillar-ico">🛡️</div>
                    <h3>Security that understands</h3>
                    <p style="color: var(--text-muted); font-size: .92rem; line-height: 1.6; margin-top: .5rem;">Your existing cameras gain person, vehicle, face and parcel recognition — running locally, so footage never leaves the property. You get one useful message instead of two hundred useless ones.</p>
                </article>
                <article class="pillar glass">
                    <div class="pillar-ico">💧</div>
                    <h3>Water that thinks ahead</h3>
                    <p style="color: var(--text-muted); font-size: .92rem; line-height: 1.6; margin-top: .5rem;">Irrigation decided by soil moisture and tomorrow's forecast, not a timer. Tank levels, borehole and municipal supply monitored, with leak detection that catches a burst pipe before it catches you.</p>
                </article>
                <article class="pillar glass">
                    <div class="pillar-ico">💬</div>
                    <h3>A house you can talk to</h3>
                    <p style="color: var(--text-muted); font-size: .92rem; line-height: 1.6; margin-top: .5rem;">Message your home on WhatsApp. Ask what happened at the gate at 2am, whether the geyser is on, or to arm the house. It answers in plain language, and reports in every morning.</p>
                </article>
                <article class="pillar glass">
                    <div class="pillar-ico">✨</div>
                    <h3>Additional features</h3>
                    <p style="color: var(--text-muted); font-size: .92rem; line-height: 1.6; margin-top: .5rem;">Presence lighting, automated blinds &amp; climate, multi-brand device unification, household admin &amp; receipts, and custom automations built around how you actually live.</p>
                </article>
            </div>

            <h4 style="margin-bottom: .8rem;">Installed Capabilities</h4>
            <p style="color: var(--text-muted); font-size: .9rem; line-height: 1.6; margin-bottom: 1rem;">Built on Home Assistant, so the thousands of devices it already speaks to are available from day one — and the automations stay yours if you ever part ways with us.</p>
            <div style="margin-bottom: 1.6rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>home-assistant-api</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>home-assistant-voice-pipelines</span>
            </div>

            <h4 style="margin-bottom: .8rem;">Go deeper</h4>
            <div style="display: flex; gap: .5rem; flex-wrap: wrap; margin-bottom: 1.6rem;">
                <button class="btn btn-ghost btn-sm" onclick="openModal('modal_problem')">🤔 The Problem</button>
                <button class="btn btn-ghost btn-sm" onclick="openModal('modal_works')">⚙️ How It Works</button>
                <button class="btn btn-ghost btn-sm" onclick="openModal('modal_promises')">🤝 Where We Stand</button>
                <button class="btn btn-ghost btn-sm" onclick="openModal('modal_local_ai')">🔋 Local AI Control</button>
                <button class="btn btn-ghost btn-sm" onclick="openModal('modal_offline')">🔌 Offline Resilience</button>
                <button class="btn btn-ghost btn-sm" onclick="openModal('modal_architecture')">🏗️ System Architecture</button>
            </div>

            <a href="#enquire" class="btn btn-primary" onclick="closeModal()">Enter my task</a>
        `
    },
    'skill_web': {
        icon: '🌐',
        title: 'Web Development',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Provides the system with the capability to autonomously design, test, build, and deploy entire websites from scratch.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>xurl</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>cloudflare-temporary-deploy</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>page-agent</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>frontend-design</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>frontend-skill</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>netlify-deploy</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>vercel-deploy</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>web-artifacts-builder</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>webapp-testing</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>winui-app</span>
            </div>
        `
    },
    
    'modal_additional': {
        icon: '✨',
        title: 'Also Included',
        content: `
            <ul class="ticks" style="font-size: 1.1rem; line-height: 1.8;">
                <li>Presence lighting</li>
                <li>Automated blinds & climate</li>
                <li>Intelligent geyser control</li>
                <li>Multi-brand device unification</li>
                <li>Household admin & receipts</li>
                <li>Custom automations</li>
            </ul>
        `
    },
    'modal_energy': {
        icon: '⚡',
        title: 'Energy that pays you back',
        content: `<p>Live circuit-level monitoring shows exactly what's costing you. Then the system acts on it — heating the geyser off solar surplus, holding the pool pump for cheaper hours, and shedding non-essentials before your inverter has to.</p>
        <ul class="ticks"><li>Real-time consumption per circuit</li><li>Solar &amp; inverter aware scheduling</li><li>Monthly savings report</li></ul>`
    },

    'modal_security': {
        icon: '🛡️',
        title: 'Security that understands',
        content: `<p>Your existing cameras gain person, vehicle, face and parcel recognition — running locally, so footage never leaves the property. You get one useful message instead of two hundred useless ones.</p>
        <ul class="ticks"><li>Person / vehicle / face detection</li><li>Footage stays on-site &amp; private</li><li>Gates always need <em>your</em> approval</li></ul>`
    },

    'modal_water': {
        icon: '💧',
        title: 'Water that thinks ahead',
        content: `<p>Irrigation decided by soil moisture and tomorrow's forecast, not a timer. Tank levels, borehole and municipal supply monitored, with leak detection that catches a burst pipe before it catches you.</p>
        <ul class="ticks"><li>Weather-aware irrigation</li><li>Tank &amp; borehole levels</li><li>Leak and burst-pipe alerts</li></ul>`
    },

    'modal_voice': {
        icon: '💬',
        title: 'A house you can talk to',
        content: `<p>Message your home on WhatsApp. Ask what happened at the gate at 2am, whether the geyser is on, or to arm the house. It answers in plain language, and reports in every morning.</p>
        <ul class="ticks"><li>WhatsApp, voice or text</li><li>Daily household briefing</li><li>Ask anything, in plain English</li></ul>`
    },
    
    'modal_local_ai': {
        icon: '🔋',
        title: 'Local AI Control',
        content: `<p style="font-size: 1.1rem; line-height: 1.6;">This is the part cloud smart-home brands can't do. The Jaxtech controller and its essential sensors sit behind your inverter or a small UPS, and the AI that makes the decisions runs <em>on the box in your house.</em></p>`
    },
    'modal_offline': {
        icon: '🔌',
        title: 'Offline Resilience',
        content: `<p style="font-size: 1.1rem; line-height: 1.6;">Fibre down? Eskom down? Cameras still analyse, lights still respond, the gate still logs, and your morning report still arrives the moment connectivity returns.</p>`
    },
    'modal_architecture': {
        icon: '🏗️',
        title: 'System Architecture',
        content: `<div class="stack"><div class="layer glass"><b>Your devices</b><span>Cameras, lights, geyser, gate, sensors, meters</span></div><div class="layer-arrow" aria-hidden="true"></div><div class="layer glass accent"><b>Jaxtech controller</b><span>On-site hardware · inverter-backed · local AI</span></div><div class="layer-arrow" aria-hidden="true"></div><div class="layer glass"><b>You</b><span>WhatsApp · app · voice — from anywhere</span></div></div>`
    },
    'modal_problem': {
        icon: '🤔',
        title: 'The Problem',
        content: `
  <div class="wrap">
    <p class="kicker ">The problem</p>
    <h2 class="h2 ">Smart devices didn't make your home smart.</h2>
    <p class="lede ">You ended up with six apps, a geyser that heats at the worst possible time, cameras that alert you about moths, and none of it works when the power goes out.</p>

    <div class="pain-grid">
      <div class="pain ">
        <div class="pain-ico">🔌</div>
        <h3>Load-shedding kills it</h3>
        <p>Cloud-dependent devices go dark the moment the fibre router loses power — exactly when you need the house watching itself.</p>
      </div>
      <div class="pain ">
        <div class="pain-ico">📱</div>
        <h3>Six apps, no system</h3>
        <p>The lights don't know the alarm is armed. The geyser doesn't know you're away. Nothing talks to anything else.</p>
      </div>
      <div class="pain ">
        <div class="pain-ico">💸</div>
        <h3>Invisible waste</h3>
        <p>Your geyser and pool pump quietly eat the bulk of your bill, and irrigation runs the morning after it rained.</p>
      </div>
      <div class="pain ">
        <div class="pain-ico">🔔</div>
        <h3>Alert fatigue</h3>
        <p>Two hundred motion notifications a day means you stop reading them — so you miss the one that mattered.</p>
      </div>
    </div>
  </div>
`
    },

    'modal_works': {
        icon: '⚙️',
        title: 'How It Works',
        content: `
  <div class="wrap">
    <p class="kicker ">How it works</p>
    <h2 class="h2 ">Four steps. No surprises.</h2>

    <ol class="steps">
      <li class="step ">
        <span class="step-n">01</span>
        <h3>Free assessment</h3>
        <p>We walk the property with you, see what you already own, and listen to what actually annoys you. About an hour. Costs nothing, obligates nothing.</p>
      </li>
      <li class="step ">
        <span class="step-n">02</span>
        <h3>Design &amp; fixed quote</h3>
        <p>You get a written system design and a fixed price — what's included, what it does, what it saves. Nothing is ordered until you say go.</p>
      </li>
      <li class="step ">
        <span class="step-n">03</span>
        <h3>Clean installation</h3>
        <p>Installed around your routine, tidily, mostly using the wiring and devices already there. We show you how everything works before we leave.</p>
      </li>
      <li class="step ">
        <span class="step-n">04</span>
        <h3>Tuning &amp; support</h3>
        <p>The first month is where a smart home becomes <em>your</em> smart home. We adjust the automations to how you actually live, then keep supporting it.</p>
      </li>
    </ol>
  </div>
`
    },

    'modal_promises': {
        icon: '🤝',
        title: 'Where We Stand',
        content: `
  <div class="wrap">
    <p class="kicker ">Where we stand</p>
    <h2 class="h2 ">Four promises we don't move on.</h2>
    <div class="assure-grid">
      <div class="assure "><b>Your data stays home</b><p>Camera footage and household data are processed on your property. No third-party cloud holds your family's movements.</p></div>
      <div class="assure "><b>No lock-in subscription</b><p>The system is yours. Support plans are optional, not a hostage fee for your own house.</p></div>
      <div class="assure "><b>We use what you have</b><p>Existing cameras, lights, gate motors and inverters get smarter. We replace hardware only when it genuinely can't do the job.</p></div>
      <div class="assure "><b>Humans stay in charge</b><p>The house handles the routine things. Anything that matters — gates, locks, spending — still waits for you.</p></div>
    </div>
  </div>
`
    },

    'modal_exec': {
        icon: '📋',
        title: 'The short version',
        content: `
            <h2>The short version</h2>
            <p style="color: var(--text-muted); line-height: 1.8; margin-bottom: 1rem;">Tiny can genuinely do a lot: build and ship real software, train and run its own AI models, put together financial models and valuations, do deep research on a person, company or topic, and produce video, audio and design work — on top of running your home.</p>
            <p style="color: var(--text-muted); line-height: 1.8;">Every skill below has been tested and is ready to use today. New ones get added as they're needed, so this list keeps growing.</p>
        `
    },

    'modal_metrics': {
        icon: '📊',
        title: 'Where the skills come from',
        content: `
            <h2>Where the skills come from</h2>
            <p style="color: var(--text-muted); line-height: 1.8; margin-bottom: 1.2rem;">Tiny's skills come from four places, each checked before it's trusted with anything:</p>
            <ul style="color: var(--text-muted); line-height: 1.8;">
                <li style="margin-bottom: .8rem;"><strong>Built in from day one</strong> — the core abilities every Tiny has: running code, managing files, reasoning through a problem, talking to you.</li>
                <li style="margin-bottom: .8rem;"><strong>Official platform connections</strong> — verified integrations with the cloud services, finance tools and business systems Tiny might need to plug into.</li>
                <li style="margin-bottom: .8rem;"><strong>Purpose-built for the job</strong> — custom tools written specifically for a client's situation, running on their own hardware.</li>
                <li><strong>Vetted community tools</strong> — proven open-source tools, reviewed before Tiny is allowed to use them.</li>
            </ul>
        `
    },

    'modal_domains': {
        icon: '🌐',
        title: 'What this looks like in practice',
        content: `
            <h2>What this looks like in practice</h2>

            <div class="domain-card">
                <h3>AI & machine learning</h3>
                <p>Tiny can train and fine-tune its own AI models, run them fast and privately on local hardware instead of the cloud, and build a private knowledge base so it answers from your actual information — not guesses.</p>
            </div>

            <div class="domain-card">
                <h3>Software & automation</h3>
                <p>Tiny writes, tests and ships real software — from a small internal tool to a production web app — and can review and maintain code the way a senior engineer would.</p>
            </div>

            <div class="domain-card">
                <h3>Finance & business</h3>
                <p>Tiny can build financial models, valuations and forecasts, and set up billing, payments and online stores for a business.</p>
            </div>

            <div class="domain-card">
                <h3>Creative & design</h3>
                <p>Tiny can produce 3D design work, images, video, audio and visual documentation — useful for marketing, prototyping, or just getting an idea out of your head.</p>
            </div>

            <div class="domain-card">
                <h3>Security & research</h3>
                <p>Tiny can audit systems for vulnerabilities, run deep research on a person, company or topic from public information, and write up exactly what it found.</p>
            </div>
        `
    },

    'modal_workflows': {
        icon: '🔄',
        title: 'A few examples end to end',
        content: `
            <h2>A few examples end to end</h2>
            <ul style="color: var(--text-muted); line-height: 1.8;">
                <li style="margin-bottom: 1rem;"><strong>Research to working demo:</strong> Tiny reads the latest research on a topic, trains a small AI model based on what it learned, and publishes a live demo you can show people — without a developer in the loop.</li>
                <li style="margin-bottom: 1rem;"><strong>Idea to live business:</strong> Tiny designs how a new product should look, writes the code to build it, works out whether it's financially viable, sets up payments, and puts it online.</li>
                <li><strong>Full security check:</strong> Tiny scans your systems for weaknesses, checks your software for hidden risks, and writes up exactly what it found and what to fix — in plain language, not a raw scan log.</li>
            </ul>
        `
    },
    'skill_hw': {
        icon: '⚡',
        title: 'Hardware Acceleration',
        content: `
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">Provides access to specialized NVIDIA engineering tools, allowing the AI to maximize performance by directly controlling the home's processing units.</p>
            <h4>Installed Capabilities</h4>
            <div style="margin-top: 1rem;">
                <span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>accelerated-computing-cudf</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>cudaq-guide</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>cuopt-*</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>cupynumeric-*</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>deepstream-*</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>doca-*</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>earth2studio-*</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>holoscan-*</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>jetson-*</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>nemo-*</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>tao-*</span><span class='badge' style='background: rgba(255,255,255,0.1); margin: 0.2rem; display: inline-block; font-family: monospace; text-transform: none; color: #a0a0a0;'>tilegym-*</span>
            </div>
        `
    }
};
