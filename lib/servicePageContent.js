import {
  BS_7499_STATIC_GUARDING,
  BS_7984_KEY_HOLDING,
  PUBLIC_LIABILITY_AMOUNT,
  SIA_DEPLOY_STATEMENT
} from "./siteContact";

/**
 * SkyWatch Security Ltd - Complete 18 Core Commercial Services Content
 * Clean-room bespoke service content generator.
 * All services rewritten with original names.
 */

const SERVICE_DATA = {
  "manned-security-guards": {
    "heroKicker": "Static & Perimeter Guarding",
    "heroTitle": "Static Site & Manned Guarding Services",
    "heroSubtitle": "Dedicated on-site security guards maintaining gate access, perimeter security, and shift occurrence logs.",
    "directAnswer": "Static site guarding places a security officer on your premises for the hours you book. It suits warehouses, offices, and compounds that need a person at the gate, the door, or the perimeter for a whole shift. SkyWatch provides this service in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedGuide": {
      "href": "/blog/what-affects-the-cost-of-security-guarding-uk",
      "label": "What affects the cost of security guarding in the UK"
    },
    "relatedService": {
      "href": "/services/mobile-patrols",
      "label": "Mobile security patrols and inspection visits"
    },
    "problemSolved": {
      "title": "The Operational Risks We Eliminate",
      "body": "Unattended commercial facilities and perimeter gates are vulnerable to opportunist theft, unauthorised contractor intrusion, and after-hours property damage. An undisciplined guarding presence can create compliance liabilities, while an unvetted workforce compromises site safety.",
      "points": [
        "Unauthorised vehicular or pedestrian access through unmanned gates and loading docks",
        "Out-of-hours asset shrinkage, tool theft, and inventory loss in commercial compounds",
        "Lone-worker safety vulnerabilities during evening, weekend, and holiday maintenance windows",
        "Failed insurer compliance audits resulting from unlogged visitor entries and missing fire-exit checks",
        "Reputational damage caused by unprofessional front-line contractor confrontation"
      ]
    },
    "deploymentModel": {
      "title": "How does a SkyWatch guarding deployment operate?",
      "intro": "We do not believe in generic guard arrangements. Every assignment follows a structured mobilisation framework:",
      "steps": [
        {
          "step": "01",
          "title": "Comprehensive Site Hazard & Access Survey",
          "text": "Our operations supervisor visits your facility in person to survey access gates, blind spots, high-value holding areas, perimeter fencing, and lone-worker risk points."
        },
        {
          "step": "02",
          "title": "Bespoke Assignment Instructions (AIs)",
          "text": "We draft formal, client-approved post orders detailing shift timings, access validation protocols, key management, emergency escalation trees, and specific patrol waypoints."
        },
        {
          "step": "03",
          "title": "Vetted Guard Selection & Site Induction",
          "text": "Officers are checked for right to work, employment history, and criminal disclosure, then briefed on your site, emergency shut-offs, and how you want them to communicate."
        },
        {
          "step": "04",
          "title": "Digital Patrol Tagging & Supervisory Visits",
          "text": "Officers log patrol checkpoints via electronic NFC tags. Local mobile field supervisors conduct unannounced daytime and nocturnal site audits to verify standards."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "What is included in your guarding contract?",
      "items": [
        {
          "title": "Written Assignment Instructions",
          "desc": "Bespoke site-specific post orders detailing access procedures, patrol routes, and emergency escalation."
        },
        {
          "title": "Dedicated Gatehouse Posting",
          "desc": "An officer posted at the vehicle and pedestrian entrance for the booked shift, logging contractors, deliveries, and visitors against the Assignment Instructions."
        },
        {
          "title": "Digital Occurrence Logging (Daily DOB)",
          "desc": "Shift activities, visitor numbers, delivery notes, and perimeter checks are recorded electronically and delivered daily."
        },
        {
          "title": "Supervisor Quality Audits",
          "desc": "Random, documented inspections by our regional operations managers to review appearance, punctuality, and log accuracy."
        },
        {
          "title": "Full Equipment & Uniform Package",
          "desc": "Professional black corporate security uniform or high-visibility site PPE, torches, radios, and emergency panic devices."
        },
        {
          "title": "24/7 Operational Escalation Support",
          "desc": "Direct access to our 24/7 control team for emergency shift replacements, incident escalation, and short-notice cover surges."
        },
        { kind: "public-liability" }
      ]
    },
    "sectorsServed": {
      "title": "Sectors That Rely on Our Static Guarding",
      "sectors": [
        {
          "name": "Logistics & Distribution Parks",
          "description": "Gatehouse access management, HGV delivery logging, trailer seal audits, and perimeter fence patrols."
        },
        {
          "name": "Commercial Office Buildings",
          "description": "Out-of-hours floor sweeps, tenant reception assistance, after-hours contractor verification, and building securing."
        },
        {
          "name": "Manufacturing & Industrial Compounds",
          "description": "Perimeter deterrence, machinery protection, yard security, and hazardous material enclosure checks."
        },
        {
          "name": "Retail Warehouses & Depots",
          "description": "Loading dock monitoring, staff search procedure execution, and night-time stock protection."
        }
      ]
    },
    "pricingFactors": {
      "title": "How are the commercial terms and pricing structured?",
      "body": "Security guarding pricing is based on clear, transparent operating economics rather than hidden fees. We quote competitive hourly rates structured around your specific requirement:",
      "factors": [
        "Contracted weekly coverage hours (e.g., 24/7 continuous guarding vs. 12-hour night shifts and weekend coverage)",
        "Single-officer deployments vs. multi-guard gatehouse and roving patrol teams",
        "Contract length: ongoing annual commercial contracts vs. temporary or short-term project-based coverage",
        "Specialist requirements such as first aid qualifications, CSCS cards for construction interfaces, or enhanced vetting"
      ]
    },
    "faqs": [
      {
        "question": "How do you screen and vet your security officers?",
        "answer": "Before deployment we check UK Right to Work, employment history, proof of address, and criminal disclosure."
      },
      {
        "question": "How quickly can SkyWatch deploy static guards to our premises?",
        "answer": "For standard contracts, mobilisation follows a site survey and agreed Assignment Instructions. Emergency cover is arranged when officers are available."
      },
      {
        "question": "What happens if a scheduled guard is sick or unable to attend a shift?",
        "answer": "We maintain a dedicated reserve bench of inducted relief officers who are familiar with local routes and general post orders. Our 24/7 control coordination ensures replacement officers are dispatched immediately."
      },
      {
        "question": "How do we verify that guards are actively conducting patrols overnight?",
        "answer": "We install electronic checkpoint tags at strategic locations across your premises. Officers scan these tags during their rounds, recording timestamps and GPS data compiled into auditable reports."
      },
      {
        "question": "What reporting documentation do we receive as a client?",
        "answer": "Clients receive daily digital occurrence logs, visitor logs, and immediate incident reports detailing exact timelines, actions taken, and escalation records."
      },
      {
        "question": "Can guards perform lock-up, unlock, and reception duties as part of the post?",
        "answer": "Yes. Duties can include morning unlocks, evening securing, fire exit inspections, contractor badges, and visitor logging incorporated directly into post instructions."
      },
      {
        "question": "How is a dedicated gatehouse post staffed during a shift?",
        "answer": "The officer remains at the vehicle and pedestrian entrance for the booked hours, logging contractors, deliveries, and visitors. Assignment Instructions set whether that officer also walks the perimeter, or whether a second officer covers the round."
      }
    ]
  },
  "key-holding-alarm-response": {
    "heroKicker": "Rapid Out-of-Hours Response",
    "heroTitle": "Key Holding & Rapid Alarm Response Services",
    "heroSubtitle": "Secure off-site key vaulting and mobile responder attendance for alarm activations across Luton, Bedfordshire, and Greater London.",
    "directAnswer": "Key holding means SkyWatch keeps your commercial keys off site and attends when an alarm is passed to us. It is for businesses that do not want a member of staff called out at night. SkyWatch offers this across Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedGuide": {
      "href": "/blog/commercial-key-holding-best-practices-home-counties",
      "label": "Why outsourced commercial key holding protects staff"
    },
    "relatedService": {
      "href": "/services/mobile-patrols",
      "label": "Mobile security patrols and inspection visits"
    },
    "problemSolved": {
      "title": "Eliminating Employee Risk and Disturbed Nights",
      "body": "Requiring employees or business owners to attend nocturnal alarm activations exposes staff to physical violence, creates severe lone-worker liability, and disrupts operational productivity the following day.",
      "points": [
        "Physical danger to staff attending unverified break-ins or burglary attempts alone at 3am",
        "Breach of UK corporate duty of care and Health and Safety at Work lone-worker regulations",
        "Staff fatigue and absenteeism following repeated false alarms and middle-of-the-night call-outs",
        "Unsecured premises when exhausted staff fail to thoroughly inspect secondary perimeter break points",
        "Increased commercial insurance premiums resulting from repeated uninvestigated alarm triggers"
      ]
    },
    "deploymentModel": {
      "title": "How does our alarm response service operate?",
      "intro": "Keys are logged and sealed, and a mobile officer is dispatched when your alarm receiving centre calls the operations desk:",
      "steps": [
        {
          "step": "01",
          "title": "Secure Key Handover & Tamper-Evident Sealing",
          "text": "Your site keys, access fobs, and alarm codes are catalogued, assigned an anonymous tracking code, and locked in a secure vehicle safe."
        },
        {
          "step": "02",
          "title": "Emergency Escalation Matrix",
          "text": "We record emergency contacts, approved contractors (boarding-up, locksmiths, glaziers), and primary client stakeholders."
        },
        {
          "step": "03",
          "title": "Immediate Alarm Signal Dispatch",
          "text": "Upon receiving an activation from your Alarm Receiving Centre (ARC), our 24/7 control room dispatches the nearest mobile patrol unit."
        },
        {
          "step": "04",
          "title": "Thorough Site Sweep & Client Debrief",
          "text": "The officer completes an external and internal security sweep, liaises with police if an intrusion occurred, resets the alarm, and logs a full report."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "Key Holding Agreement Deliverables",
      "items": [
        {
          "title": "Secure Tamper-Evident Key Storage",
          "desc": "Keys coded anonymously and kept in sealed, tamper-evident wallets."
        },
        {
          "title": "24/7/365 Alarm Attendance",
          "desc": "Continuous out-of-hours coverage including bank holidays, weekends, and annual shutdown periods."
        },
        {
          "title": "Full Internal & External Inspection",
          "desc": "Thorough physical check of all windows, doors, roof lights, fire exits, and plant rooms upon arrival."
        },
        {
          "title": "Emergency Contractor Management",
          "desc": "Liaison with glaziers and boarding teams to re-secure premises before leaving site."
        },
        {
          "title": "Detailed Electronic Attendance Report",
          "desc": "Digital notification sent to your nominated inbox with arrival time, findings, and actions taken."
        },
        { kind: "public-liability" }
      ]
    },
    "sectorsServed": {
      "title": "Properties Protected by Our Key Holding Service",
      "sectors": [
        {
          "name": "Commercial Offices & Financial Suites",
          "description": "Protection for IT suites, corporate records, and void tenant floors out of hours."
        },
        {
          "name": "Retail Stores & Showrooms",
          "description": "Attendance to glass-break, roller-shutter, and motion sensor alarms in high-street and retail park units."
        },
        {
          "name": "Schools & Community Centres",
          "description": "Relieving headteachers and caretakers from hazardous nocturnal site attendance."
        },
        {
          "name": "Warehouses & Trade Counters",
          "description": "Fast response to compound gate tripwires, shutter contacts, and external PIR activations."
        }
      ]
    },
    "pricingFactors": {
      "title": "Commercial Pricing Structure",
      "body": "Our key holding contracts operate on a simple, transparent fee framework without complex hidden clauses:",
      "factors": [
        "Modest annual key holding retainer covering secure key vaulting, documentation, and 24/7 readiness",
        "Fixed-rate call-out fee per alarm activation, including an agreed initial investigation period on site",
        "Transparent hourly rates for extended attendance when waiting for emergency glaziers or police investigators",
        "Discounted rates for clients combining key holding with regular mobile patrol visits"
      ]
    },
    "faqs": [
      {
        "question": "How are our building keys kept secure?",
        "answer": "Keys are tagged with unique alphanumeric codes with no identifying business names or addresses. They are stored in secure commercial key safes within our mobile response units."
      },
      {
        "question": "What is the typical alarm response time?",
        "answer": "We attend alarm calls across our core operating areas (Luton, Dunstable, Bedford, Milton Keynes, Watford, St Albans, and Greater London). Arrival depends on traffic and distance."
      },
      {
        "question": "What happens if there is evidence of an actual break-in?",
        "answer": "Our officer remains at a safe vantage point, alerts police via 999, and awaits backup. Once police secure the site, our officer conducts an internal damage audit and coordinates emergency glazing or boarding."
      },
      {
        "question": "Can your officers reset our alarm system?",
        "answer": "Yes. During initial onboarding, you provide alarm codes and panel reset instructions. Our officers reset the system and ensure the property is fully armed before departure."
      },
      {
        "question": "Will we be notified when an alarm occurs?",
        "answer": "Yes. You choose your notification protocol: an immediate phone call for verified incidents, or a digital email incident report by 8:00 AM for minor false activations."
      },
      {
        "question": "Do you handle scheduled lock and unlock requests?",
        "answer": "Yes. Many key holding clients also use our mobile patrol officers to unlock facilities for early cleaning staff and lock up after evening shifts."
      },
      {
        "question": "Is there a minimum contract duration?",
        "answer": "Standard key holding agreements run annually, though flexible short-term options are available for temporary building works or property transactions."
      }
    ]
  },
  "mobile-patrols": {
    "heroKicker": "Scheduled & Randomised Site Visits",
    "heroTitle": "Mobile Security Patrols & Inspection Visits",
    "heroSubtitle": "Liveried vehicle visits, lock and unlock routines, perimeter checks, and on-foot internal checkpoint sweeps across Bedfordshire, Hertfordshire, and London.",
    "directAnswer": "Mobile patrols are planned visits by a marked vehicle and an officer who checks doors, gates, and the perimeter, then leaves for the next site. They suit premises that do not need an officer on site all night. SkyWatch runs these visits in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedGuide": {
      "href": "/blog/mobile-patrols-vs-static-guarding-commercial-costs",
      "label": "Mobile patrols compared with static guarding"
    },
    "relatedService": {
      "href": "/services/manned-security-guards",
      "label": "Static site and manned guarding"
    },
    "problemSolved": {
      "title": "Cost-Effective Deterrence Without Full-Time Guarding Costs",
      "body": "Many commercial facilities do not require continuous static guarding but remain highly vulnerable to nocturnal trespassing, fly-tipping, vandalism, and open window vulnerabilities when left completely uninspected.",
      "points": [
        "Opportunistic trespassers and youths entering commercial yards and perimeter fences after dark",
        "Commercial fly-tipping on unattended access roads, loading bays, and car parks",
        "Costly water leaks, open fire doors, or failed heating plant left undiscovered over full weekends",
        "Prohibitive expense of placing a 24/7 static security officer on low-risk commercial estates",
        "Unverified site visits from low-cost security providers who fail to conduct physical vehicle dismounts"
      ]
    },
    "deploymentModel": {
      "title": "Our Mobile Patrol Methodology",
      "intro": "Unpredictable timing prevents criminals from predicting patrol patterns, while electronic checkpoints prove every visit took place:",
      "steps": [
        {
          "step": "01",
          "title": "Site Checkpoint Mapping",
          "text": "We map out high-vulnerability waypoints (fuel stores, compound gates, fire exits, rear alleys) and install weather-resistant NFC tags."
        },
        {
          "step": "02",
          "title": "Randomised Route Scheduling",
          "text": "Visits are scheduled at varying times throughout the night and weekend to ensure local observers cannot predict our arrival."
        },
        {
          "step": "03",
          "title": "Dismount & Physical Boundary Sweep",
          "text": "The officer parks visibly, exits the vehicle, physically checks padlocks and doors, and scans all installed checkpoint tags."
        },
        {
          "step": "04",
          "title": "Real-Time Telemetry & Reporting",
          "text": "Checkpoint scans, photos of open gates, and GPS verification data are transmitted instantly to our operations desk and client portal."
        },
        {
          "step": "05",
          "title": "On-Foot Internal Sweeps",
          "text": "Where required, officers leave the vehicle to walk plant rooms, fire-escape corridors, and server areas, scanning interior NFC waypoints before completing the visit report."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "Mobile Patrol Deliverables",
      "items": [
        {
          "title": "Liveried Patrol Vehicles",
          "desc": "Clean, highly visible security patrol vehicles providing an unmistakable visual deterrent."
        },
        {
          "title": "NFC Checkpoint Scans",
          "desc": "Electronic proof of attendance recorded at key physical points during each visit."
        },
        {
          "title": "Physical Perimeter & Door Checks",
          "desc": "Officers physically test doors, padlocks, compound gates, and ground-floor windows."
        },
        {
          "title": "Lock and Unlock Programmes",
          "desc": "Scheduled opening of commercial car parks, gates, and tenant buildings at agreed morning and evening hours."
        },
        {
          "title": "Environmental Hazard Checks",
          "desc": "Early detection of pipe bursts, running water, electrical faults, and vandalism."
        },
        {
          "title": "Warning Deterrence Signage",
          "desc": "High-visibility warning boards installed at your boundary perimeter declaring active patrol protection."
        },
        {
          "title": "Interior Foot Patrol Waypoints",
          "desc": "On-foot rounds through plant rooms, fire exits, and server corridors with interior NFC scans where your site requires them."
        }
      ]
    },
    "sectorsServed": {
      "title": "Facilities Benefiting from Mobile Patrols",
      "sectors": [
        {
          "name": "Industrial Estates & Trade Parks",
          "description": "Nightly vehicle sweeps deterring fuel theft, metal looting, and yard trespassing."
        },
        {
          "name": "Corporate Car Parks & Void Offices",
          "description": "Scheduled lockups, preventing anti-social behaviour and unauthorised vehicle encampments."
        },
        {
          "name": "Construction & Civil Engineering Compounds",
          "description": "Weekend visits checking generator locks, scaffold alarms, and perimeter fencing."
        },
        {
          "name": "Schools & Sports Facilities",
          "description": "Evening locking of fields and gates, preventing out-of-hours vandalism and trespassing."
        },
        {
          "name": "Multi-Floor Offices & Plant Areas",
          "description": "Interior foot sweeps of fire exits, plant rooms, and void floors when part of the patrol programme."
        }
      ]
    },
    "pricingFactors": {
      "title": "How does mobile patrol pricing work?",
      "body": "Mobile patrols offer substantial cost savings compared to continuous manned guarding. Pricing is determined by:",
      "factors": [
        "Number of agreed patrol visits per 24-hour cycle (e.g., 2, 3, or 5 visits per night)",
        "Property footprint and number of internal/external checkpoint scans required per visit",
        "Inclusion of scheduled lock and unlock requirements at fixed operational times",
        "Geographic location and clustering along our primary patrol routes across the M1 corridor"
      ]
    },
    "faqs": [
      {
        "question": "How do we know the mobile patrol officer actually arrived?",
        "answer": "We install NFC checkpoint tags at agreed points on your property. The officer must physically scan each tag with an electronic reader, producing timestamped GPS records accessible in your reports."
      },
      {
        "question": "Can mobile visits be combined with locking and unlocking services?",
        "answer": "Yes. Officers can unlock at agreed morning times, secure the site in the evening, and conduct perimeter checks on each visit."
      },
      {
        "question": "What happens if an officer discovers a trespasser or broken window?",
        "answer": "The officer immediately contacts our 24/7 control desk, reports the issue to police if a crime has occurred, and remains on site until emergency boarding or repairs are completed."
      },
      {
        "question": "Are the patrol visits scheduled at the same time each night?",
        "answer": "No. Aside from fixed lock/unlock times, security patrol visits are intentionally randomised so criminals cannot predict when our vehicle will arrive."
      },
      {
        "question": "How do you show that a property is on a mobile patrol route?",
        "answer": "We can fit weather-proof boards on the boundary stating that the site receives active mobile surveillance. The boards are a deterrent; they do not replace the timed visits or the checkpoint scans."
      },
      {
        "question": "How many visits per night do you recommend?",
        "answer": "For standard commercial premises, 2 to 3 visits per night and regular weekend checks provide strong, cost-effective deterrence. Higher-risk sites may opt for 4 to 6 visits."
      },
      {
        "question": "Do patrol officers complete on-foot sweeps inside the building?",
        "answer": "Where the visit plan includes interior waypoints, the officer leaves the vehicle, walks plant rooms, fire-escape corridors and server areas, and scans indoor checkpoint tags before writing the visit report."
      }
    ]
  },
  "construction-security": {
    "heroKicker": "Building Site & Plant Protection",
    "heroTitle": "Construction Site Security & Compound Protection",
    "heroSubtitle": "Dedicated site guarding, CSCS-aligned access control, delivery management, and out-of-hours plant protection across Bedfordshire and London.",
    "directAnswer": "Construction site security is on-site guarding for live building projects. Officers cover the gate, stored plant, and the boundary while the site is open or closed for the night. It is for principal contractors and site managers. SkyWatch provides this in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedGuide": {
      "href": "/blog/construction-site-security-hertfordshire-developments",
      "label": "Securing active construction sites"
    },
    "relatedService": {
      "href": "/services/manned-security-guards",
      "label": "Static site and manned guarding"
    },
    "problemSolved": {
      "title": "Preventing Project Delays and High-Value Asset Theft",
      "body": "Construction sites are prime targets for organised criminal gangs seeking high-value plant machinery, hand tools, copper cabling, and fuel. Theft directly causes project handover delays, heavy insurance deductibles, and liquidated damages.",
      "points": [
        "Nocturnal theft of excavators, rollers, generators, and handheld power tools",
        "Stripping of newly installed copper piping, cabling, and architectural metalwork",
        "Unauthorised delivery vehicles entering site without proper safety verification or waste permits",
        "Youth trespassing, urban exploration, and dangerous falls leading to HSE investigations",
        "Arson and malicious vandalism resulting in catastrophic site rebuild delays"
      ]
    },
    "deploymentModel": {
      "title": "Construction Security Mobilisation",
      "intro": "Our construction site deployment process aligns directly with CDM regulations and principal contractor safety standards:",
      "steps": [
        {
          "step": "01",
          "title": "Perimeter & Compound Vulnerability Audit",
          "text": "We assess site hoarding, timber gates, plant storage yards, welfare cabins, and fuel storage zones."
        },
        {
          "step": "02",
          "title": "Gatehouse & Delivery Control Setup",
          "text": "We establish delivery vehicle logging, driver safety briefings, CSCS card validation, and PPE verification checks."
        },
        {
          "step": "03",
          "title": "Guard Induction to Site Safety Rules",
          "text": "Guards are inducted on emergency spill response, fire evacuation routes, assembly points, and lone-worker check-ins."
        },
        {
          "step": "04",
          "title": "Nocturnal Sweeps & Electronic Patrols",
          "text": "Guards conduct physical boundary scans throughout the night, ensuring cabins are locked and scaffold alarms are armed."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "Construction Security Deliverables",
      "items": [
        {
          "title": "Site Guarding Team",
          "desc": "Security guards trained in construction compound protection and physical access deterrence."
        },
        {
          "title": "CSCS Familiarity & PPE Compliance",
          "desc": "Guards equipped with steel-toe boots, hard hats, high-vis vests, and eye protection."
        },
        {
          "title": "Vehicle & Subcontractor Access Logging",
          "desc": "Rigorous registration of delivery dockets, subcontractor names, and vehicle registrations."
        },
        {
          "title": "Out-of-Hours Plant & Fuel Inspections",
          "desc": "Scheduled checks of excavator cabins, generator fuel caps, and container lockboxes."
        },
        {
          "title": "Digital Incident & Shift Reporting",
          "desc": "Daily morning reports delivered to the Site Manager before opening trades arrive."
        },
        { kind: "public-liability" }
      ]
    },
    "sectorsServed": {
      "title": "Building Environments We Protect",
      "sectors": [
        {
          "name": "Residential Housing Developments",
          "description": "Protection for show homes, material storage plots, and unoccupied build phases."
        },
        {
          "name": "Commercial & Industrial Builds",
          "description": "Gatehouse control, logistics management, and compound security for large-scale logistics developments."
        },
        {
          "name": "Civil Engineering & Infrastructure",
          "description": "Highway maintenance compounds, rail project depots, and utilities upgrades."
        },
        {
          "name": "Refurbishment & Fit-Out Projects",
          "description": "Internal guarding, access control, and noise monitoring during city-centre office fit-outs."
        }
      ]
    },
    "pricingFactors": {
      "title": "Pricing & Commercial Agreement",
      "body": "Construction site security is priced based on clear project parameters and flexible contractor terms:",
      "factors": [
        "Coverage schedule (e.g. 12-hour night shifts plus 24-hour weekend and bank holiday cover vs. 24/7 continuous guarding)",
        "Gatehouse operations scope, delivery volume, and single vs. multi-officer site requirements",
        "Project duration, ranging from short-term groundwork phases to multi-year development agreements",
        "Short-notice mobilisation requirements for emergency security following sudden perimeter damage"
      ]
    },
    "faqs": [
      {
        "question": "Do your guards hold CSCS cards for construction sites?",
        "answer": "Yes. Where the assignment requires entering active construction zones alongside trades, guards hold valid CSCS cards and attend principal contractor safety inductions."
      },
      {
        "question": "Can guards manage morning deliveries before site managers arrive?",
        "answer": "Yes. Officers can open gates for scheduled early deliveries, check delivery dockets, ensure delivery vehicles hold engines, and direct drivers to designated holding bays."
      },
      {
        "question": "How do you protect equipment when scaffolding is erected?",
        "answer": "We inspect scaffold perimeter netting, ensure ladder guards or scaffold alarms are engaged, and maintain regular ground-level observation checks."
      },
      {
        "question": "What happens in the event of an intruder on site?",
        "answer": "Our guard confronts intruders using calm, verbal authority from a safe position, requests they leave, and contacts police immediately if criminal trespass occurs."
      },
      {
        "question": "Do you provide temporary security for short-term fit-outs?",
        "answer": "Yes. We support projects lasting from a few days or weeks up to multi-year commercial schemes."
      },
      {
        "question": "Can you provide warning signage for our site hoardings?",
        "answer": "Yes. We provide clear, branded SkyWatch Security warning boards to deter opportunist intruders."
      },
      {
        "question": "How do you log plant and materials at the compound gate?",
        "answer": "Gatehouse officers record inbound deliveries against dockets, hold vehicles at the gate until they are booked in, and keep a written record of who entered the compound during the shift."
      }
    ]
  },
  "concierge-security": {
    "heroKicker": "Front-of-House Access & Customer Care",
    "heroTitle": "Concierge Security & Access Desk Services",
    "heroSubtitle": "Polished front-of-house officers for corporate lobbies, hotel reception desks, and residential foyers—with visitor care and strict access control.",
    "directAnswer": "Concierge security is a front-desk officer who greets visitors and checks who is allowed into the building. It is for offices, residential blocks, and managed buildings that want a reception presence with access control. SkyWatch supplies this in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedGuide": {
      "href": "/blog/corporate-reception-security-balancing-hospitality",
      "label": "Hospitality and vigilance at a corporate reception"
    },
    "relatedService": {
      "href": "/services/corporate-security",
      "label": "Corporate building and office security"
    },
    "problemSolved": {
      "title": "Balancing High Security with Professional Hospitality",
      "body": "A traditional guarding posture can appear overly aggressive in a corporate reception or luxury residential foyer, while an untrained receptionist may lack the crisis management skills required during a security incident.",
      "points": [
        "Unauthorised tailgating through corporate speed-gates and turnstiles",
        "Poor visitor first impressions caused by unapproachable or unprofessional front-desk staff",
        "Inadequate contractor sign-in records compromising fire safety and building evacuation registers",
        "Disruptive deliveries and unvetted courier personnel wandering unsecured office floors",
        "Lack of trained personnel capable of handling medical emergencies or building evacuations calmly"
      ]
    },
    "deploymentModel": {
      "title": "Concierge Security Service Model",
      "intro": "We recruit and induct concierge officers specifically for environments where brand presentation matters as much as access control:",
      "steps": [
        {
          "step": "01",
          "title": "Reception Protocol Alignment",
          "text": "We align our duties with your corporate front-desk standards, visitor booking systems, and tenant directory."
        },
        {
          "step": "02",
          "title": "Corporate Dress & Grooming Standards",
          "text": "Officers wear sharp corporate black suits, crisp shirts, and ties, presenting an immaculate front-line image."
        },
        {
          "step": "03",
          "title": "Access Badge & Contractor Control",
          "text": "We issue visitor passes, verify contractor liability certificates, and coordinate access permits."
        },
        {
          "step": "04",
          "title": "Out-of-Hours Transition",
          "text": "At end of business, concierge officers transition to building lock-up, floor sweeps, and alarm monitoring."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "Concierge Agreement Inclusions",
      "items": [
        {
          "title": "Concierge Personnel",
          "desc": "Professionally trained officers skilled in conflict resolution and front-of-house etiquette."
        },
        {
          "title": "Visitor & Contractor Registration",
          "desc": "Electronic logging of all building arrivals, badge issuing, and departure reconciliation."
        },
        {
          "title": "Hotel and Office Lobby Reception",
          "desc": "Front-of-house cover at hotel lobbies and office towers: guest or tenant arrivals, visitor badges, and night-desk lock-up when the day team has left."
        },
        {
          "title": "Telephone & Switchboard Handling",
          "desc": "Professional call greeting, message taking, and forwarding to tenant suites."
        },
        {
          "title": "Parcel & Courier Management",
          "desc": "Secure intake, logging, and tenant notification for courier deliveries and postal items."
        },
        {
          "title": "Emergency Evacuation Support",
          "desc": "Trained fire wardens assisting tenant evacuation and emergency service briefing."
        },
        { kind: "public-liability" }
      ]
    },
    "sectorsServed": {
      "title": "Environments We Support",
      "sectors": [
        {
          "name": "Corporate Office Headquarters",
          "description": "Multi-tenant office buildings requiring executive-level reception and turnstile management."
        },
        {
          "name": "Luxury Residential Developments",
          "description": "24/7 concierge assistance, key holding, parcel handling, and resident support."
        },
        {
          "name": "Serviced Office Hubs",
          "description": "Flexible desk management, meeting room access, and tenant security coordination."
        },
        {
          "name": "Medical & Professional Clinics",
          "description": "Discreet arrival greeting, patient waiting area supervision, and access control."
        },
        {
          "name": "Boutique Hotels & Corporate Towers",
          "description": "Lobby reception, visitor badges, night reception cover, and discreet VIP arrivals."
        }
      ]
    },
    "pricingFactors": {
      "title": "Commercial Concierge Terms",
      "body": "Concierge security agreements are tailored to building operating hours and front-desk staffing requirements:",
      "factors": [
        "Staffing hours (e.g. standard business day 8am-6pm vs. 24/7 front desk coverage)",
        "Single concierge vs. dual front-desk and roving security team deployments",
        "Administrative duties included (such as meeting room booking, switchboard, or post-room duties)",
        "Length of agreement: long-term facilities management agreements vs. temporary cover"
      ]
    },
    "faqs": [
      {
        "question": "What is the difference between a concierge officer and a standard guard?",
        "answer": "A concierge officer blends front-of-house hospitality skills, corporate attire, and telephone etiquette with core security competencies like access control and emergency response."
      },
      {
        "question": "Can concierge officers manage digital visitor management systems?",
        "answer": "Yes. Our officers are comfortable operating modern digital check-in systems, speed gates, and visitor badge printers."
      },
      {
        "question": "What uniform do concierge officers wear?",
        "answer": "Officers wear smart corporate business suits with clip-on ties and discreet security identification."
      },
      {
        "question": "Can concierge staff assist with parcel deliveries?",
        "answer": "Yes. We accept, sign for, log, and store parcels securely, notifying tenants promptly."
      },
      {
        "question": "Are concierge officers trained in first aid and fire safety?",
        "answer": "Yes. Officers receive fire warden and basic first aid training to assist during building emergencies."
      },
      {
        "question": "Can concierge officers cover hotel or office lobby desks at night?",
        "answer": "Yes. Night reception cover can combine guest or tenant arrival handling with building securing, floor checks, and alarm coordination."
      },
      {
        "question": "How do concierge officers handle switchboard calls and meeting-room access together?",
        "answer": "The desk can greet callers, take messages, and release meeting rooms only to booked tenants or hosts named on the visitor system, so hospitality work does not bypass access control."
      }
    ]
  },
  "corporate-security": {
    "heroKicker": "Commercial Headquarters & Multi-Tenant Estates",
    "heroTitle": "Corporate Building & Office Security Services",
    "heroSubtitle": "Comprehensive security infrastructure protection, loading dock oversight, and executive escort services for corporate facilities in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "directAnswer": "Corporate building security is guarding for offices and headquarters. It covers the reception, loading areas, and internal floors during the working day or overnight. It is for facilities managers who need staff and visitors checked. SkyWatch delivers this in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedGuide": {
      "href": "/blog/corporate-reception-security-balancing-hospitality",
      "label": "Hospitality and vigilance at a corporate reception"
    },
    "relatedService": {
      "href": "/services/concierge-security",
      "label": "Concierge security and access desk services"
    },
    "problemSolved": {
      "title": "Protecting Corporate Assets, Data, and Personnel",
      "body": "Corporate headquarters face multi-layered threats ranging from industrial espionage and server room breach to aggressive activist demonstrations and tailgating through loading bays.",
      "points": [
        "Unauthorised physical breach into confidential executive suites and IT server rooms",
        "Protests, activist disruption, and reputational risk outside corporate building entrances",
        "Loading bay vulnerabilities during high-volume courier and catering vehicle deliveries",
        "Lost productivity and health & safety risks from unresolved tenant building access disputes",
        "Disjointed emergency coordination during fire evacuations or security lockdown alerts"
      ]
    },
    "deploymentModel": {
      "title": "Corporate Facility Protection Model",
      "intro": "Our corporate security framework integrates discrete guarding, CCTV operations, and access control management:",
      "steps": [
        {
          "step": "01",
          "title": "Building Security & Access Audit",
          "text": "We evaluate pedestrian turnstiles, underground car parks, server rooms, and loading dock access points."
        },
        {
          "step": "02",
          "title": "Assignment Instructions & Escalation Trees",
          "text": "Tailored protocols detailing tenant VIP arrivals, media management, and protest containment procedures."
        },
        {
          "step": "03",
          "title": "Induction & Systems Familiarisation",
          "text": "Officers are trained on your building management systems (BMS), access pass databases, and CCTV matrix."
        },
        {
          "step": "04",
          "title": "Continuous Supervisory Oversight",
          "text": "Regular management meetings, KPI monitoring, and incident debriefs ensure high performance."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "Corporate Security Contract Inclusions",
      "items": [
        {
          "title": "Uniformed Officers",
          "desc": "Impeccably turned-out officers briefed on the building's access rules and escalation paths."
        },
        {
          "title": "Loading Dock & Delivery Management",
          "desc": "Supervision of vehicular delivery bays, contractor permits-to-work, and waste collection."
        },
        {
          "title": "Internal Floor Sweeps & Void Checks",
          "desc": "Out-of-hours patrols verifying executive offices are locked and clean-desk policies maintained."
        },
        {
          "title": "Access Badge Administration",
          "desc": "Printing, activating, and auditing tenant and contractor access cards."
        },
        {
          "title": "Crisis Management & Evacuation Support",
          "desc": "Experienced support for building lockdowns, fire drills, and security incident containment."
        },
        { kind: "public-liability" }
      ]
    },
    "sectorsServed": {
      "title": "Corporate Estates We Support",
      "sectors": [
        {
          "name": "Financial & Legal Headquarters",
          "description": "Discreet, high-integrity access management for sensitive client-facing environments."
        },
        {
          "name": "Technology & Innovation Campuses",
          "description": "Protection of server infrastructure, R&D labs, and intellectual property assets."
        },
        {
          "name": "Multi-Tenant Business Parks",
          "description": "Central gatehouse control, perimeter boundary security, and shared amenity protection."
        },
        {
          "name": "Corporate Training & Conference Centres",
          "description": "Delegate badge checks, parking control, and executive speaker safety."
        }
      ]
    },
    "pricingFactors": {
      "title": "Corporate Security Pricing Economics",
      "body": "Corporate security packages are structured around service complexity, officer numbers, and coverage scope:",
      "factors": [
        "Staffing configuration (e.g. single reception guard vs. multi-officer front-desk, loading bay, and control room team)",
        "Operating hours (standard business hours vs. 24/7/365 continuous corporate guarding)",
        "Specialist training requested (for example advanced first aid, conflict management, or CCTV operation)",
        "Contract duration and service level agreement (SLA) performance reporting requirements"
      ]
    },
    "faqs": [
      {
        "question": "Can corporate officers manage loading bay operations?",
        "answer": "Yes. Officers can oversee loading bay vehicle arrivals, check driver IDs, inspect tail-lifts, and ensure vehicles do not obstruct fire routes."
      },
      {
        "question": "How do officers handle unexpected protests or media presence?",
        "answer": "Officers follow clear protest containment post orders: securing outer doors, maintaining calm professional presence, avoiding physical confrontation, and notifying local police."
      },
      {
        "question": "Can guards enforce clean-desk and data security policies?",
        "answer": "Yes. During evening floor sweeps, officers note unattended confidential documents or unlocked file drawers and compile reports for your Information Security team."
      },
      {
        "question": "Can corporate officers wear the building's own pass lanyard?",
        "answer": "Yes. Officers wear a smart corporate black suit as standard. If the building issues its own pass lanyard or name badge, that is worn with the suit so tenants can identify the post."
      },
      {
        "question": "How do you handle key and pass management?",
        "answer": "All master keys and access cards are logged in digital key management registers with signatures required on issue and return."
      },
      {
        "question": "Can you provide relief cover for existing in-house security teams?",
        "answer": "Yes. We supply trained relief officers to back up your internal team during holidays, training days, or sudden absences."
      },
      {
        "question": "Can one assignment cover both the loading bay and the lobby?",
        "answer": "Yes. Assignment Instructions can keep one officer at the lobby while another logs vehicles at the loading bay, or a single officer can cover both at quieter hours."
      }
    ]
  },
  "cctv-monitoring": {
    "heroKicker": "Remote Surveillance & Visual Verification",
    "heroTitle": "CCTV Monitoring & Remote Surveillance Services",
    "heroSubtitle": "24/7 video surveillance monitoring, virtual tripwire alert verification, and rapid mobile responder dispatch across Luton, Bedfordshire, and London.",
    "directAnswer": "CCTV monitoring is remote watching of your cameras, so an alert can be checked before someone is sent to the site. It is for premises that already have cameras and want them watched outside staffed hours. SkyWatch provides this in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedService": {
      "href": "/services/key-holding-alarm-response",
      "label": "Key holding and alarm response"
    },
    "problemSolved": {
      "title": "Transforming Passive CCTV into Active Crime Prevention",
      "body": "Unmonitored CCTV cameras only record crimes after they happen, leaving businesses with blurry footage and unrecoverable losses. Active remote monitoring stops crimes while in progress.",
      "points": [
        "Intruders entering compounds unseen while passive cameras simply record the event",
        "Costly criminal damage occurring before security personnel can be notified",
        "Burden of false alarm call-outs triggered by wildlife, weather, or shifting foliage",
        "Failure to transmit real-time video evidence to police during ongoing break-ins",
        "High cost of maintaining continuous physical guards on expansive commercial sites"
      ]
    },
    "deploymentModel": {
      "title": "Remote Surveillance Workflow",
      "intro": "We connect your commercial camera systems into structured monitoring networks for immediate intervention:",
      "steps": [
        {
          "step": "01",
          "title": "System Audit & Camera Zone Mapping",
          "text": "We review camera viewing angles, lighting, virtual perimeter tripwires, and detection blind spots."
        },
        {
          "step": "02",
          "title": "Secure IP Stream Connection",
          "text": "Encrypted connection established between your on-site NVR/DVR and our 24/7 surveillance monitoring desk."
        },
        {
          "step": "03",
          "title": "Virtual Patrols & Alarm Verification",
          "text": "When motion trips a boundary beam, controllers review live feeds in seconds to filter out false alarms."
        },
        {
          "step": "04",
          "title": "Audio Warning & Mobile Dispatch",
          "text": "Controllers issue live audio warnings over site tannoys and dispatch mobile patrol responders or police."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "CCTV Monitoring Service Inclusions",
      "items": [
        {
          "title": "24/7 Video Monitoring Desk",
          "desc": "Round-the-clock surveillance coordination covering nocturnal hours, weekends, and holidays."
        },
        {
          "title": "Visual Alarm Verification",
          "desc": "Immediate human verification of sensor triggers to eliminate costly false call-outs."
        },
        {
          "title": "Live Audio Warning Broadcasts",
          "desc": "Direct audio challenges over site tannoys warning intruders they are being monitored and police notified."
        },
        {
          "title": "Rapid Mobile Patrol Dispatch",
          "desc": "Instant dispatch of local mobile response units to investigate verified physical intrusions."
        },
        {
          "title": "Police Evidence Packages",
          "desc": "Time-stamped, watermarked HD video clips prepared for police prosecution and insurance claims."
        },
        {
          "title": "UK GDPR & Privacy Compliance",
          "desc": "Encrypted storage, agreed retention limits, and handling in line with our data retention policy."
        }
      ]
    },
    "sectorsServed": {
      "title": "Surveillance Applications",
      "sectors": [
        {
          "name": "Storage Compounds & Plant Yards",
          "description": "Virtual boundary tripwire monitoring preventing after-hours machinery theft."
        },
        {
          "name": "Car Dealerships & Forecourts",
          "description": "Protecting vehicle inventory from parts stripping, wheel theft, and vandalism."
        },
        {
          "name": "Logistics & Transport Depots",
          "description": "Gate line monitoring and out-of-hours trailer compound surveillance."
        },
        {
          "name": "Vacant Commercial Properties",
          "description": "Early detection of squatter entry, metal theft, and environmental water ingress."
        }
      ]
    },
    "pricingFactors": {
      "title": "Surveillance Pricing Structure",
      "body": "CCTV monitoring provides substantial savings compared to static guarding, structured by:",
      "factors": [
        "Number of connected camera channels and virtual detector zones monitored",
        "Monitoring schedule: out-of-hours night/weekend monitoring vs. 24/7 continuous coverage",
        "Integration of audio talkdown amplifiers and perimeter tannoy speakers",
        "Combination with local mobile patrol response and key holding services"
      ]
    },
    "faqs": [
      {
        "question": "Can you connect to our existing CCTV system?",
        "answer": "Yes. We can connect to most modern IP-based camera systems, NVRs, and DVRs supporting standard RTSP, ONVIF, or manufacturer remote transmission protocols."
      },
      {
        "question": "How quickly do controllers react when an alarm is triggered?",
        "answer": "Monitoring controllers review the live video when a perimeter sensor triggers."
      },
      {
        "question": "Do live audio warnings really deter intruders?",
        "answer": "Yes. Controllers can issue a live audio challenge, for example: 'Warning: you are in an unauthorised area and police have been informed.'"
      },
      {
        "question": "How do controllers pass a confirmed intrusion to the police?",
        "answer": "They dial 999 with a description of what is visible on camera so the call is treated as a verified incident, and they stay on the pictures until officers arrive or the scene is clear."
      },
      {
        "question": "How do you prevent false alarms from wildlife or bad weather?",
        "answer": "We utilise modern AI video analytics that distinguish human and vehicle movement from animals, rain, and swaying branches."
      },
      {
        "question": "Are video recordings compliant with UK GDPR?",
        "answer": "Footage is stored with encryption and kept for the retention period set out in our data retention policy, in line with the Data Protection Act 2018."
      },
      {
        "question": "Can CCTV monitoring be paired with a local mobile response?",
        "answer": "Yes. When a controller confirms an intrusion on camera, they can call the police with the video evidence and send a local mobile unit to the site while remaining on the live feed."
      }
    ]
  },
  "event-security": {
    "heroKicker": "Event Safety, Stewarding & Crowd Management",
    "heroTitle": "Event Security & Crowd Safety Management",
    "heroSubtitle": "Professional event security, crowd management, entry ticket scanning, and perimeter stewarding for public and corporate events across the UK.",
    "directAnswer": "Event security is stewarding and access control for a gathering with a start and a finish time. It is for organisers of corporate functions, public events, and private bookings who need entrances and crowds managed. SkyWatch provides this in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedGuide": {
      "href": "/blog/door-supervisors-vs-security-guards",
      "label": "Door supervisors compared with security guards"
    },
    "relatedService": {
      "href": "/services/door-supervision",
      "label": "Door supervision for licensed venues"
    },
    "problemSolved": {
      "title": "Safeguarding Attendees, Licences, and Reputations",
      "body": "Poorly managed event entry, aggressive door personnel, or inadequate crowd control can lead to licensing revocations, venue fines, crowd surges, and reputational disasters.",
      "points": [
        "Crushes, queue bottlenecks, and safety risks at entrance turnstiles and search lanes",
        "Alcohol-fuelled disorder, verbal conflict, and physical violence inside venues",
        "Prohibited items entering venues including weapons, flares, drugs, or glass containers",
        "Unauthorised gatecrashing and perimeter fence breaching overwhelming event capacity",
        "Loss of local authority premises licence due to failure to meet Safety Advisory Group (SAG) conditions"
      ]
    },
    "deploymentModel": {
      "title": "Event Security Planning & Execution",
      "intro": "We work collaboratively with event promoters, local authorities, and police from initial concept to safe debrief:",
      "steps": [
        {
          "step": "01",
          "title": "Safety Plan & Risk Assessment",
          "text": "We review venue layout, entry capacity, alcohol licensing terms, artist profile, and emergency exit routes."
        },
        {
          "step": "02",
          "title": "Multi-Agency Coordination (SAG)",
          "text": "We assist with documentation for local council Safety Advisory Groups and police licensing officers."
        },
        {
          "step": "03",
          "title": "Briefing & Role Deployment",
          "text": "Security staff receive comprehensive briefings on venue rules, search policies, and communication channels."
        },
        {
          "step": "04",
          "title": "Live Event Operation & Debrief",
          "text": "Our event managers oversee crowd dynamics, resolve entry issues, and conduct formal post-event debriefs."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "Event Security Package Deliverables",
      "items": [
        {
          "title": "Event Officers",
          "desc": "Security personnel trained in crowd psychology, customer care, and conflict resolution."
        },
        {
          "title": "Bag Search & Metal Detection Teams",
          "desc": "Professional search lanes equipped with handheld metal detectors (wands) and search tables."
        },
        {
          "title": "Ticket Scanning & Turnstile Management",
          "desc": "Fast, organised queue management preventing bottlenecks at main access gates."
        },
        {
          "title": "Bar & VIP Area Protection",
          "desc": "Discreet security maintaining age verification compliance and guest safety."
        },
        {
          "title": "Emergency Evacuation Marshals",
          "desc": "Trained stewards ready to direct crowds safely in the event of an evacuation."
        },
        { kind: "public-liability" }
      ]
    },
    "sectorsServed": {
      "title": "Event Formats We Support",
      "sectors": [
        {
          "name": "Corporate Conferences & Product Launches",
          "description": "Discrete entry greeting, delegate badge checks, and executive protection."
        },
        {
          "name": "Outdoor Festivals & Concerts",
          "description": "Perimeter stewarding, main stage pit security, and entry lane searches."
        },
        {
          "name": "Sporting Events & Tournaments",
          "description": "Turnstile operations, crowd segregation, and pitch-side security."
        },
        {
          "name": "Community Fairs & Exhibitions",
          "description": "Family-friendly stewarding, parking management, and lost child protocols."
        }
      ]
    },
    "pricingFactors": {
      "title": "Event Pricing Considerations",
      "body": "Event security is quoted on clear day or hourly rates tailored to event scale and licensing requirements:",
      "factors": [
        "Number of security officers and stewards required by your council licensing conditions",
        "Event duration, shift timings, and out-of-hours overnight build/breakdown security requirements",
        "Risk profile of the event, crowd demographics, and alcohol availability",
        "Specialist equipment needed, such as metal detection search arches or two-way radio networks"
      ]
    },
    "faqs": [
      {
        "question": "Can you assist with local council Safety Advisory Group (SAG) meetings?",
        "answer": "Yes. Our senior management can help draft your event security management plan and attend council SAG meetings alongside your team."
      },
      {
        "question": "When do event officers wear high-visibility jackets rather than suits?",
        "answer": "Outdoor festivals and public stewarding use high-visibility jackets and polo shirts so crowd routes stay obvious. Indoor corporate galas use smart black suits so the team blends with the guest list."
      },
      {
        "question": "How do you move a disruptive attendee away from a crowded floor?",
        "answer": "Officers speak to the person, walk them to a quieter edge of the site, and only involve the event manager or the police if the disruption continues or someone is at risk."
      },
      {
        "question": "Can you provide event security at short notice?",
        "answer": "Yes, subject to staff availability. We maintain a flexible reserve bench to support urgent event bookings across Bedfordshire and London."
      },
      {
        "question": "Do you provide female security officers for bag searches?",
        "answer": "Yes. We plan balanced male and female security teams to conduct respectful, thorough female bag and body searches."
      },
      {
        "question": "Can you provide overnight security during event setup and breakdown?",
        "answer": "Yes. We protect stages, AV equipment, sound systems, and marquee compounds before and after the event."
      },
      {
        "question": "What radios or search arches can you bring to an event?",
        "answer": "We can supply two-way radios and, where the event plan requires it, search arches. Exact kit is agreed in the event security plan rather than assumed on the day."
      }
    ]
  },
  "industrial-warehouse": {
    "heroKicker": "Logistics & Distribution Compound Security",
    "heroTitle": "Warehouse & Logistics Security Services",
    "heroSubtitle": "Gatehouse access control, HGV trailer seal checks, stock shrinkage deterrence, and perimeter patrols for distribution centres in Luton and the M1 corridor.",
    "directAnswer": "Warehouse and logistics security is gate and yard guarding for distribution buildings. Officers log vehicles, watch loading areas, and check the fence line during the shifts you book. It is for depot and transport managers. SkyWatch provides this in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedGuide": {
      "href": "/blog/luton-bedfordshire-warehouse-loss-prevention",
      "label": "Warehouse and logistics security in Bedfordshire"
    },
    "relatedService": {
      "href": "/services/manned-security-guards",
      "label": "Static site and manned guarding"
    },
    "problemSolved": {
      "title": "Stopping High-Value Cargo Shrinkage and Yard Disruption",
      "body": "Logistics depots and e-commerce fulfilment hubs handle high-value consumer goods. Uncontrolled gatehouses, lax trailer checks, and missing employee search procedures create severe stock loss.",
      "points": [
        "Internal stock shrinkage and organised staff tool and merchandise theft",
        "Unauthorised delivery vehicles entering yard compounds without paperwork validation",
        "Broken trailer security seals and unrecorded cargo discrepancies causing freight disputes",
        "Trespassers cutting perimeter fences to access high-value pallet holding areas",
        "Yard traffic collisions and health & safety risks from unmanaged HGV driver movements"
      ]
    },
    "deploymentModel": {
      "title": "Distribution Centre Security Operations",
      "intro": "We implement disciplined gatehouse and yard procedures designed to protect cargo without slowing supply chain throughput:",
      "steps": [
        {
          "step": "01",
          "title": "Gatehouse Dispatch & Seal Logging",
          "text": "Every arriving and departing HGV is checked for driver ID, delivery manifest, trailer registration, and intact security seal number."
        },
        {
          "step": "02",
          "title": "Staff Search & Air-Lock Operations",
          "text": "Randomised, respectful staff search routines and metal detector screening at shift changeovers to prevent stock shrinkage."
        },
        {
          "step": "03",
          "title": "Perimeter & Yard Inspections",
          "text": "Regular foot sweeps checking trailer pin locks, perimeter fences, emergency exits, and pallet staging zones."
        },
        {
          "step": "04",
          "title": "Digital Shift Logs & Discrepancy Alerts",
          "text": "Instant electronic reporting of seal discrepancies, damaged stock, or unauthorised contractor attendance."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "Logistics Security Deliverables",
      "items": [
        {
          "title": "Uniformed Officers",
          "desc": "Officers trained in logistics safety, gatehouse discipline, and freight protection."
        },
        {
          "title": "Trailer Seal Verification & Logging",
          "desc": "Accurate recording of bolt and cable seal numbers on dispatch and receipt."
        },
        {
          "title": "HGV Driver & Visitor Management",
          "desc": "Site safety briefings, parking allocation, and collection of keys during loading."
        },
        {
          "title": "Staff Search Protocol Execution",
          "desc": "Impartial, documented search procedures conducted under agreed company policy."
        },
        {
          "title": "Yard Traffic & PPE Enforcement",
          "desc": "Enforcing high-vis wear, reverse parking, and pedestrian segregation rules."
        },
        { kind: "public-liability" }
      ]
    },
    "sectorsServed": {
      "title": "Logistics Environments We Protect",
      "sectors": [
        {
          "name": "E-Commerce Fulfillment Hubs",
          "description": "High-volume parcel facilities requiring strict turnaround and staff search protocols."
        },
        {
          "name": "Freight & Haulage Depots",
          "description": "24/7 gatehouse control, trailer parking security, and perimeter patrols."
        },
        {
          "name": "Cold Storage & Food Distribution",
          "description": "Temperature-controlled facility security and delivery vehicle temperature logging."
        },
        {
          "name": "Manufacturing Warehouses",
          "description": "Raw material yard security, finished goods storage, and waste metal protection."
        }
      ]
    },
    "pricingFactors": {
      "title": "Logistics Security Agreement Terms",
      "body": "Warehouse and distribution security packages are tailored around operational shift patterns:",
      "factors": [
        "Gatehouse staffing schedule (24/7/365 continuous cover vs. 12-hour night and weekend coverage)",
        "Volume of HGV movements and need for dual gatehouse and yard rover officer teams",
        "Implementation of formal employee search programmes and air-lock inspection lanes",
        "Length of commercial agreement: ongoing annual contracts vs. peak seasonal cover"
      ]
    },
    "faqs": [
      {
        "question": "Can guards manage HGV booking-in systems?",
        "answer": "Yes. Our officers are inducted on digital logistics and yard management software to book drivers in, verify manifests, and assign loading docks."
      },
      {
        "question": "How do you handle trailer seal discrepancies?",
        "answer": "If a seal is missing or does not match paperwork, the officer immediately halts unloading, photographs the seal, and alerts warehouse management."
      },
      {
        "question": "How are employee searches conducted?",
        "answer": "Searches are conducted politely, randomly, and in full compliance with UK employment law and your site search policy, using handheld metal detectors."
      },
      {
        "question": "Can you supply security during peak seasonal periods (e.g. Q4 retail peak)?",
        "answer": "Yes. We provide flexible staffing expansions to handle heightened volume during peak retail and logistics periods."
      },
      {
        "question": "What PPE do warehouse guards wear?",
        "answer": "Guards wear safety boots with steel toe-caps, high-visibility jackets, and corporate security shirts."
      },
      {
        "question": "Do you conduct yard safety patrols?",
        "answer": "Yes. Regular patrols check that trailer kingpin locks are fitted, fire lanes are clear, and perimeter fencing is secure."
      },
      {
        "question": "How do you keep fire lanes and trailer parks clear on a night shift?",
        "answer": "Yard patrols check that trailer kingpin locks are fitted, that emergency lanes are not blocked by uncoupled trailers, and that the fence line has not been cut."
      }
    ]
  },
  "commercial-security": {
    "heroKicker": "Commercial Estates & Business Facilities",
    "heroTitle": "Commercial Property & Business Park Security",
    "heroSubtitle": "Flexible commercial security solutions for multi-tenant business parks, trade compounds, and commercial facilities across Bedfordshire and London.",
    "directAnswer": "Commercial property security covers a business park, industrial estate, or multi-tenant building with guarding, patrols, or both. It is for landlords and managing agents responsible for several units on one site. SkyWatch provides this in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedGuide": {
      "href": "/blog/mobile-patrols-vs-static-guarding-commercial-costs",
      "label": "Mobile patrols compared with static guarding"
    },
    "relatedService": {
      "href": "/services/mobile-patrols",
      "label": "Mobile security patrols and inspection visits"
    },
    "problemSolved": {
      "title": "Protecting Business Parks and Multi-Tenant Estates",
      "body": "Commercial estates with multiple tenants face complex security challenges: high visitor traffic, varying operating hours, open car parks, and vulnerable boundary lines.",
      "points": [
        "Unauthorised vehicles, fly-tipping, and anti-social behaviour in shared business park car parks",
        "Disputes over common-area access, loading bay obstruction, and out-of-hours deliveries",
        "Property damage and window breakage targeting vacant commercial office suites",
        "Inconsistent security standards between different building tenants undermining site safety",
        "Excessive costs when individual tenants attempt to procure separate security services"
      ]
    },
    "deploymentModel": {
      "title": "Commercial Estate Management Model",
      "intro": "We provide unified security governance across the entire commercial estate:",
      "steps": [
        {
          "step": "01",
          "title": "Estate Security Audit",
          "text": "We review shared access gates, tenant parking zones, lighting, and refuse compound perimeters."
        },
        {
          "step": "02",
          "title": "Tenant Coordination & Post Orders",
          "text": "We establish clear common-area access rules and out-of-hours contractor entry protocols."
        },
        {
          "step": "03",
          "title": "Visible Guarding & Patrol Presence",
          "text": "Officers provide gatehouse greeting, barrier operation, and scheduled foot patrols across the estate."
        },
        {
          "step": "04",
          "title": "Estate Manager Reporting",
          "text": "Consolidated daily shift summaries and occurrence logs delivered directly to the managing agent."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "Commercial Security Package Inclusions",
      "items": [
        {
          "title": "Uniformed Officers",
          "desc": "Security guards trained in estate management, access control, and customer service."
        },
        {
          "title": "Estate Entrance & Barrier Control",
          "desc": "Managing barrier access, logging delivery traffic, and directing visiting clients."
        },
        {
          "title": "Common Area & Car Park Patrols",
          "desc": "Foot and mobile sweeps preventing unauthorised vehicle encampments and vandalism."
        },
        {
          "title": "Morning Unlock & Evening Lock-Up",
          "desc": "Opening shared gates at start of business and securing the perimeter each night."
        },
        {
          "title": "Waste & Refuse Compound Security",
          "desc": "Inspecting bin enclosures to prevent commercial fly-tipping and arson hazards."
        },
        { kind: "public-liability" }
      ]
    },
    "sectorsServed": {
      "title": "Commercial Facilities We Protect",
      "sectors": [
        {
          "name": "Multi-Tenant Business Parks",
          "description": "Coordinated security, entrance barriers, and car park patrols for corporate business parks."
        },
        {
          "name": "Trade Counter Estates",
          "description": "Managing commercial trade traffic, customer parking, and out-of-hours yard protection."
        },
        {
          "name": "Science & Innovation Parks",
          "description": "High-integrity access management for specialised technology and laboratory estates."
        },
        {
          "name": "Mixed-Use Commercial Developments",
          "description": "Balancing public retail access with private corporate office security."
        }
      ]
    },
    "pricingFactors": {
      "title": "Commercial Agreement Economics",
      "body": "Commercial estate security is structured to deliver maximum cost efficiency across service charge budgets:",
      "factors": [
        "Deployment model (e.g. static gatehouse officer vs. scheduled mobile patrol visits vs. hybrid model)",
        "Coverage schedule (standard business hours vs. 24/7 continuous estate protection)",
        "Estate size, road layout, and number of individual tenant buildings to inspect",
        "Contract length: ongoing multi-year managing agent agreements vs. short-term cover"
      ]
    },
    "faqs": [
      {
        "question": "Can you provide security for managing agents across multiple estates?",
        "answer": "Yes. We partner with property management companies to provide coordinated security across multiple commercial estates in our regional area."
      },
      {
        "question": "How do officers prevent commercial fly-tipping?",
        "answer": "By securing perimeter gates out of hours, conducting regular patrol sweeps of refuse areas, and reviewing CCTV coverage."
      },
      {
        "question": "Can officers manage tenant parking enforcement?",
        "answer": "Yes. Officers can monitor tenant-allocated parking spaces, check visitor parking permits, and issue warning notices."
      },
      {
        "question": "What reporting is provided to the estate managing agent?",
        "answer": "Managing agents receive weekly or monthly consolidated reports detailing all incidents, contractor entries, and patrol verification logs."
      },
      {
        "question": "Can you open and close the estate gates at set hours?",
        "answer": "Yes. Scheduled lock and unlock services ensure estate gates are opened punctually for early workers and locked securely each night."
      },
      {
        "question": "What happens if a vacant unit on the estate is broken into?",
        "answer": "Our officer secures the area, contacts police and the managing agent, and remains on site until emergency boarding is completed."
      },
      {
        "question": "Can estate security mix a gatehouse officer with mobile visits?",
        "answer": "Yes. Some parks keep a static officer at the shared gate during the working day and switch to randomised mobile visits after lock-up, billed as one estate contract."
      }
    ]
  },
  "retail-security": {
    "heroKicker": "Retail Loss Prevention & Store Safety",
    "heroTitle": "Retail Security Guards & Stock Loss Prevention",
    "heroSubtitle": "Customer-friendly presence, visual shop-floor deterrence, staff search assistance, and stock loss prevention for retail premises in Luton and London.",
    "directAnswer": "Retail security places a uniformed officer in a shop or retail warehouse to deter theft and support staff when a customer needs to be challenged. It is for store and loss-prevention managers. SkyWatch provides this in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedGuide": {
      "href": "/blog/what-affects-the-cost-of-security-guarding-uk",
      "label": "What affects the cost of security guarding in the UK"
    },
    "relatedService": {
      "href": "/services/manned-security-guards",
      "label": "Static site and manned guarding"
    },
    "problemSolved": {
      "title": "Protecting Retail Profitability and Store Staff Safety",
      "body": "Retailers face severe challenges from organised shoplifting gangs, aggressive shop-floor confrontation, and staff stock shrinkage, threatening both profit margins and employee safety.",
      "points": [
        "Organised retail theft and bulk product sweeping targeting high-value goods",
        "Verbal abuse and physical threats directed at store colleagues attempting to challenge shoplifters",
        "Stock shrinkage through staff entrances, loading docks, and emergency fire exits",
        "Disorder, youth anti-social behaviour, and customer disputes disrupting the shopping experience",
        "Unlawful detentions and civil claims resulting from untrained or confrontational security guards"
      ]
    },
    "deploymentModel": {
      "title": "Retail Security Strategy",
      "intro": "We deploy customer-aware security officers trained to protect stock while maintaining a positive shopping environment:",
      "steps": [
        {
          "step": "01",
          "title": "Store Shrinkage & Vulnerability Assessment",
          "text": "We review store blind spots, high-value displays, emergency exit doors, and loading dock access."
        },
        {
          "step": "02",
          "title": "Visual Deterrence & Customer Greeting",
          "text": "Officers stand at primary store entrances, providing a polite welcome to customers while deterring opportunists."
        },
        {
          "step": "03",
          "title": "Floor Observation & Conflict De-escalation",
          "text": "Officers observe customer flow, watch high-theft aisles, and de-escalate potential disputes calmly."
        },
        {
          "step": "04",
          "title": "Evidential Handover & Police Liaison",
          "text": "When detention is necessary, officers follow strict legal protocols and prepare clear evidence logs for police."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "Retail Security Package Deliverables",
      "items": [
        {
          "title": "Retail Officers",
          "desc": "Security guards trained in retail law, ASCONE theft principles, and de-escalation."
        },
        {
          "title": "Visual Front-of-Store Presence",
          "desc": "Sharp corporate uniform or branded retail attire acting as an unmistakable deterrent."
        },
        {
          "title": "Bag Check & Receipt Verification",
          "desc": "Courteous receipt checks conducted under store policy when EAS alarm pedestals trigger."
        },
        {
          "title": "Staff & Contractor Exit Searches",
          "desc": "Impartial end-of-shift search routines to prevent internal shrinkage."
        },
        {
          "title": "Police Evidence Dossiers",
          "desc": "Prompt, objective written statements and CCTV timestamp logs for police prosecution."
        },
        { kind: "public-liability" }
      ]
    },
    "sectorsServed": {
      "title": "Retail Environments We Protect",
      "sectors": [
        {
          "name": "Department Stores & Fashion Outlets",
          "description": "High-theft branded apparel protection, fitting room monitoring, and customer service."
        },
        {
          "name": "Supermarkets & Convenience Stores",
          "description": "Loss prevention, staff protection, and deterrence against late-night retail disorder."
        },
        {
          "name": "Electronics & High-Value Retailers",
          "description": "Safeguarding expensive inventory, mobile devices, and display stock."
        },
        {
          "name": "Retail Parks & Shopping Arcades",
          "description": "Common mall patrolling, anti-social behaviour deterrence, and tenant liaison."
        }
      ]
    },
    "pricingFactors": {
      "title": "Retail Security Agreement Terms",
      "body": "Retail security is structured to deliver an immediate return on investment by reducing stock loss:",
      "factors": [
        "Store trading hours and required guard coverage (full trading day vs. peak weekend hours only)",
        "Store size and requirement for static door guard vs. roving shop-floor loss prevention officer",
        "Risk classification of store location and historical shrinkage rates",
        "Contract terms: ongoing annual retail store contracts vs. peak seasonal Christmas cover"
      ]
    },
    "faqs": [
      {
        "question": "How do your officers handle suspected shoplifters?",
        "answer": "Officers use the ASCONE sequence (Approach, Selection, Concealment, Opportunity, Non-payment, Exit) when assessing a suspected theft, and record what they saw."
      },
      {
        "question": "Can retail guards assist with customer service?",
        "answer": "Yes. Our officers are trained to greet customers warmly, provide basic store directions, and project a welcoming, professional brand image."
      },
      {
        "question": "What uniform options are available for retail stores?",
        "answer": "We offer smart corporate black suits for department stores and fashion boutiques, or high-visibility security shirts for supermarkets and trade outlets."
      },
      {
        "question": "How do guards prevent staff shrinkage?",
        "answer": "By conducting polite, randomised bag checks at staff exit points in full compliance with your company's employment policies."
      },
      {
        "question": "Can you provide temporary cover during retail sales or holidays?",
        "answer": "Yes. We provide flexible additional security guards for Black Friday sales, promotional events, and the Christmas shopping period."
      },
      {
        "question": "What happens if a shoplifter becomes aggressive?",
        "answer": "Officers are trained in conflict resolution to de-escalate aggression. Physical restraint is used only as a last resort to protect life and safety."
      },
      {
        "question": "Can a retail guard move between the shop floor and the staff exit?",
        "answer": "Yes. A post can combine a visible door presence with randomised bag checks at the staff exit, provided those checks follow the retailer's written employment policy."
      }
    ]
  },
  "door-supervision": {
    "heroKicker": "Licensed Venue & Entry Management",
    "heroTitle": "Door Supervision & Licensed Venue Security",
    "heroSubtitle": "Disciplined entry point supervision, age validation, capacity monitoring, and calm conflict de-escalation for licensed premises in Bedfordshire and London.",
    "directAnswer": "Door supervision is entry control at a licensed venue. Officers check age, watch capacity, and deal with disorder at the door. It is for pubs, bars, clubs, and venues that hold a premises licence. SkyWatch provides this in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedGuide": {
      "href": "/blog/door-supervisors-vs-security-guards",
      "label": "Door supervisors compared with security guards"
    },
    "relatedService": {
      "href": "/services/event-security",
      "label": "Event security and crowd safety"
    },
    "problemSolved": {
      "title": "Protecting Premises Licences and Venue Safety",
      "body": "Licensed premises face strict local authority licensing requirements. Aggressive door staff, under-age patrons, and unmanaged queues can lead to licence suspensions and serious safety incidents.",
      "points": [
        "Service of under-age patrons resulting in police licensing prosecution and premises closure",
        "Alcohol-fuelled queue disorder and physical altercations at venue entrance doors",
        "Overcrowding and breach of maximum venue capacity limits set by fire authorities",
        "Prohibited items entering venues including offensive weapons, drugs, or glass bottles",
        "Excessive use of force by poorly trained security bouncers causing criminal and civil liability"
      ]
    },
    "deploymentModel": {
      "title": "Door Supervision Operating Model",
      "intro": "Our door supervision work prioritises verbal de-escalation, professional entry control, and the venue's licence conditions:",
      "steps": [
        {
          "step": "01",
          "title": "Licence Condition Review",
          "text": "We review your premises licence conditions, permitted hours, capacity limits, and entry policies."
        },
        {
          "step": "02",
          "title": "Strict Entry & Age Screening",
          "text": "Officers check physical photographic IDs under Challenge 25 protocols and conduct polite bag searches."
        },
        {
          "step": "03",
          "title": "Capacity Clicker & Flow Management",
          "text": "In/out clicker counting helps the venue keep to the capacity on its premises licence."
        },
        {
          "step": "04",
          "title": "Incident Logging & Dispersal",
          "text": "Officers log all refusals and incidents in your incident register and assist with quiet patron dispersal at closing."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "Door Supervision Deliverables",
      "items": [
        {
          "title": "Door Supervisors",
          "desc": "Officers trained in conflict resolution and calm entry control for licensed venues."
        },
        {
          "title": "Challenge 25 Age Verification",
          "desc": "Rigorous checking of driving licences and PASS cards to prevent underage entry."
        },
        {
          "title": "Queue & Crowd Flow Management",
          "desc": "Organised barriers and queue marshalling to maintain public footway clearance."
        },
        {
          "title": "Refusal & Incident Log Maintenance",
          "desc": "Documented logs of all entry refusals, ejections, and confiscated items for licensing inspectors."
        },
        {
          "title": "Closing Time Dispersal Support",
          "desc": "Assisting patrons to leave quietly, minimising noise disturbance for local residents."
        },
        { kind: "public-liability" }
      ]
    },
    "sectorsServed": {
      "title": "Venues We Support",
      "sectors": [
        {
          "name": "Bars & Pubs",
          "description": "Weekend door supervision maintaining entry standards, age checks, and customer safety."
        },
        {
          "name": "Live Music Venues & Clubs",
          "description": "Capacity management, search lane operation, and crowd safety around stage areas."
        },
        {
          "name": "Private Member Clubs & Lounges",
          "description": "Discreet, polite entry verification upholding exclusive venue membership policies."
        },
        {
          "name": "Late-Night Hospitality & Dining",
          "description": "Preventing intoxication issues and maintaining quiet street dispersal at closing."
        }
      ]
    },
    "pricingFactors": {
      "title": "Door Supervision Pricing Economics",
      "body": "Door supervision is quoted on competitive hourly rates tailored to venue schedules:",
      "factors": [
        "Weekly shift hours (e.g. Friday and Saturday night coverage vs. 7-night late operating venues)",
        "Number of door supervisors required by your local council premises licence conditions",
        "Venue capacity and requirement for dedicated female search officers or head door supervisors",
        "Agreement type: ongoing weekly venue contracts vs. one-off special event door cover"
      ]
    },
    "faqs": [
      {
        "question": "What happens if a refused patron tries to re-enter later the same night?",
        "answer": "The first refusal is already in the log. The door team refuse entry again, note the second attempt, and call the venue manager or the police if the person will not leave the pavement."
      },
      {
        "question": "Do your officers maintain a refusal log for licensing inspections?",
        "answer": "Yes. Every refusal of entry (underage, intoxication, dress code) is recorded with date, time, and reason in an auditable register."
      },
      {
        "question": "Who searches female patrons at a licensed venue?",
        "answer": "Female patrons are searched by female door supervisors. We roster mixed-gender teams so that search point is covered for the hours in the premises licence plan."
      },
      {
        "question": "Do door supervisors wear high-visibility clothing or plain black?",
        "answer": "Most licensed venues use smart black clothing so the door team is identifiable without looking like festival stewards. High-visibility is used when the pavement or car park needs to be obvious to traffic."
      },
      {
        "question": "Do your door supervisors help with quiet closing dispersal?",
        "answer": "Yes. Officers assist patrons in exiting quietly, preventing street loitering and noise complaints from nearby residents."
      },
      {
        "question": "How quickly can you supply replacement door staff?",
        "answer": "Our 24/7 control room maintains reserve door personnel to cover unexpected staff illness or sudden venue capacity surges."
      },
      {
        "question": "How do you keep a venue within its licensed capacity?",
        "answer": "Officers use in/out clicker counts against the figure on the premises licence. When the count reaches that figure, further patrons wait outside until someone leaves."
      }
    ]
  },
  "educational-campus": {
    "heroKicker": "Schools, Colleges & Campus Safety",
    "heroTitle": "School & University Campus Security Services",
    "heroSubtitle": "Discreet campus boundary safety, safeguarding alignment, visitor sign-in control, and out-of-hours school building security across Bedfordshire and London.",
    "directAnswer": "Campus security is access control and out-of-hours checks for schools, colleges, and university buildings. It is for estates teams and head teachers who need visitors recorded and the site secured after lessons. SkyWatch provides this in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedService": {
      "href": "/services/manned-security-guards",
      "label": "Static site and manned guarding"
    },
    "problemSolved": {
      "title": "Safeguarding Students, Staff, and School Facilities",
      "body": "Educational institutions must maintain an open, positive learning environment while preventing unauthorised adult entry, protecting school IT assets, and safeguarding students.",
      "points": [
        "Unauthorised adults or expelled individuals entering school grounds during lesson times",
        "Nocturnal burglary targeting school computer suites, science labs, and workshop tools",
        "Safeguarding vulnerabilities and unvetted visitors interacting with children unobserved",
        "Out-of-hours vandalism, graffiti, and anti-social behaviour across playing fields and pavilions",
        "Burden placed on teaching staff and headteachers when managing gate safety and traffic congestion"
      ]
    },
    "deploymentModel": {
      "title": "Educational Campus Security Framework",
      "intro": "Our school and college security model places pupil safeguarding and approachable communication at the centre of all operations:",
      "steps": [
        {
          "step": "01",
          "title": "Safeguarding & Access Boundary Audit",
          "text": "We review perimeter fences, pedestrian entrance gates, parent drop-off zones, and delivery bays."
        },
        {
          "step": "02",
          "title": "Enhanced DBS & Vetting Compliance",
          "text": "Officers undergo enhanced screening, identity checks, and child safeguarding induction before school deployment."
        },
        {
          "step": "03",
          "title": "Morning Gate Greeting & Visitor Control",
          "text": "Officers supervise gate entry, ensure visitors sign in, issue lanyards, and manage vehicle traffic."
        },
        {
          "step": "04",
          "title": "Evening Locking & Lettings Supervision",
          "text": "Officers lock classrooms, oversee community evening hall lettings, and arm intruder alarm systems."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "Educational Security Agreement Deliverables",
      "items": [
        {
          "title": "Uniformed Officers",
          "desc": "Security officers checked for right to work and employment history, and briefed on educational safeguarding etiquette."
        },
        {
          "title": "Main Gate Arrival & Departure Supervision",
          "desc": "Welcoming students and parents while ensuring external pedestrian gates are locked during lessons."
        },
        {
          "title": "Strict Visitor & Contractor Sign-In",
          "desc": "Checking contractor DBS credentials, issuing visitor badges, and escorting unvetted workers."
        },
        {
          "title": "Evening & Weekend Lettings Cover",
          "desc": "Supervising external sports hall and facility lettings, preventing damage to academic buildings."
        },
        {
          "title": "Full Campus Lock-Up & Alarm Arming",
          "desc": "Checking ground-floor windows, securing external doors, and activating alarms at day's end."
        },
        { kind: "public-liability" }
      ]
    },
    "sectorsServed": {
      "title": "Institutions We Support",
      "sectors": [
        {
          "name": "Primary & Secondary Schools",
          "description": "Gate greeting, perimeter security, visitor check-in, and evening lockup routines."
        },
        {
          "name": "Sixth Form & Further Education Colleges",
          "description": "ID card checks, student welfare support, and campus boundary patrolling."
        },
        {
          "name": "University Campus Facilities",
          "description": "24/7 library, accommodation, and research lab security patrols."
        },
        {
          "name": "Multi-Academy Trust Portfolios",
          "description": "Coordinated security cover, key holding, and mobile response across multiple school sites."
        }
      ]
    },
    "pricingFactors": {
      "title": "School Security Budget Considerations",
      "body": "We structure educational security contracts to align with academic school budgets and term dates:",
      "factors": [
        "Term-time only coverage (e.g. 39 weeks per year) vs. 52-week year-round campus protection",
        "Staffing hours (morning/afternoon gate cover only vs. full school day plus evening lettings supervision)",
        "Campus size, number of pedestrian gates, and vehicle barrier management requirements",
        "Multi-school academy trust discounts for bundled security and key holding agreements"
      ]
    },
    "faqs": [
      {
        "question": "Do your security officers undergo Enhanced DBS checks?",
        "answer": "Yes. Any security officer deployed to a school or college setting undergoes strict Enhanced DBS screening prior to site placement."
      },
      {
        "question": "Can guards supervise community evening lettings?",
        "answer": "Yes. Officers can oversee evening sports hall or theatre lettings, ensuring community users do not access restricted academic classrooms."
      },
      {
        "question": "How do officers handle unauthorised visitors at school gates?",
        "answer": "Officers speak politely and firmly, directing visitors to the main reception entrance and preventing unescorted access to school grounds."
      },
      {
        "question": "Can you provide holiday security during summer and half-term breaks?",
        "answer": "Yes. We protect schools during holiday periods when contractors are conducting major building works or when premises are vacant."
      },
      {
        "question": "Why do campus officers wear high-visibility vests at the school gate?",
        "answer": "During parent drop-off they wear a high-visibility vest over corporate clothing so drivers can see them. Inside the building they can drop the vest and keep a quieter corporate appearance."
      },
      {
        "question": "Can officers manage parent drop-off traffic congestion?",
        "answer": "Yes. Officers assist with road safety marshalling at main school gates to ensure emergency access routes remain clear."
      },
      {
        "question": "Can campus cover follow term dates rather than a full calendar year?",
        "answer": "Yes. Contracts can run for term-time weeks only, with a separate holiday watch when the site is empty or when contractors are on the grounds."
      }
    ]
  },
  "dog-handling": {
    "heroKicker": "K9 Canine Security & Handler Units",
    "heroTitle": "K9 Security Dog Handling & Patrol Teams",
    "heroSubtitle": "Trained security handlers with trained canine deterrence units for expansive open yards, high-risk compounds, and void properties.",
    "directAnswer": "Security dog handling pairs a handler with a trained security dog for patrols of yards, compounds, and empty sites. It is for occupiers of large open ground who want a visible presence on the boundary. SkyWatch provides this in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedService": {
      "href": "/services/construction-security",
      "label": "Construction site security and compound protection"
    },
    "problemSolved": {
      "title": "Unrivalled Psychological and Physical Deterrence",
      "body": "Expansive outdoor storage yards, scrap metal compounds, and isolated void properties are difficult for solo human guards to patrol effectively. Trained security dogs provide unmatched olfactory detection and deterrent capability.",
      "points": [
        "Intruders hiding in dark corners, deep cargo pallets, or expansive unlit scrap yards",
        "Aggressive trespassers who may physically challenge or intimidate a solo security officer",
        "Vast perimeter fence lines that cannot be realistically covered on foot by a single guard",
        "Persistent metal and fuel thieves targeting isolated infrastructure sites",
        "High cost of deploying multiple static guards across vast commercial acreage"
      ]
    },
    "deploymentModel": {
      "title": "K9 Security Deployment Standards",
      "intro": "A handler and dog work the site together, with the dog under the handler's control during the patrol:",
      "steps": [
        {
          "step": "01",
          "title": "Site Survey & Perimeter Warning Signage",
          "text": "We erect prominent legal warning boards notifying the public of active trained guard dogs on site."
        },
        {
          "step": "02",
          "title": "Handler and Dog Pairing",
          "text": "Handlers and dogs are trained in obedience, agility, and controlled deterrence."
        },
        {
          "step": "03",
          "title": "Perimeter Sweeps & Scent Detection",
          "text": "The handler and dog conduct proactive perimeter walks, with the dog detecting hidden intruders by scent and sound."
        },
        {
          "step": "04",
          "title": "Safe Kennel & Welfare Provision",
          "text": "Working dogs are provided with fully equipped welfare transit vehicles and regular rest periods."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "K9 Dog Handling Package Inclusions",
      "items": [
        {
          "title": "Security Dog Handler",
          "desc": "Professional security handlers trained in canine handling and conflict de-escalation."
        },
        {
          "title": "Trained Working Dog",
          "desc": "Canine trained in scent tracking, handler protection, and controlled deterrence."
        },
        {
          "title": "Bespoke K9 Transit & Welfare Vehicle",
          "desc": "Temperature-controlled vehicle with dog transit pods."
        },
        {
          "title": "Statutory Warning Signage",
          "desc": "Warning boards along boundary fences stating that trained guard dogs are operating on site."
        },
        {
          "title": "Digital Patrol Scans & Occurrence Logs",
          "desc": "Timestamped electronic logs verifying handler perimeter sweeps throughout the shift."
        },
        { kind: "public-liability" }
      ]
    },
    "sectorsServed": {
      "title": "High-Risk Environments for K9 Security",
      "sectors": [
        {
          "name": "Scrap Metal & Vehicle Salvage Yards",
          "description": "Deterring persistent metal thieves across vast, unlit storage compounds."
        },
        {
          "name": "Large Construction & Demolition Sites",
          "description": "Protecting plant machinery across expansive acreage before hoardings are completed."
        },
        {
          "name": "Void Property & Derelict Industrial Estates",
          "description": "Preventing illegal occupation, squatter break-ins, and architectural salvage stripping."
        },
        {
          "name": "Rail Depots & Critical Utilities Compounds",
          "description": "Guarding high-voltage substations, cable storage yards, and track compounds."
        }
      ]
    },
    "pricingFactors": {
      "title": "K9 Security Commercial Economics",
      "body": "The price of a handler and trained dog depends on the site and the hours booked:",
      "factors": [
        "Coverage duration (e.g. 12-hour night shifts vs. 24-hour weekend and holiday coverage)",
        "Property acreage, terrain complexity, and perimeter fencing condition",
        "Static on-site posting vs. mobile K9 security unit conducting multi-point visits",
        "Contract type: ongoing commercial compound guarding vs. emergency void protection"
      ]
    },
    "faqs": [
      {
        "question": "What role does the dog play on site?",
        "answer": "A security dog is a visible deterrent while the handler is on duty."
      },
      {
        "question": "Are the dogs aggressive towards authorised staff?",
        "answer": "No. The dogs are highly trained in obedience and socialisation. They react only to threat commands or hostile physical intrusion under handler control."
      },
      {
        "question": "What breeds of dogs do you utilise?",
        "answer": "We primarily work with traditional working breeds known for intelligence, stamina, and obedience, such as German Shepherds, Belgian Malinois, and Rottweilers."
      },
      {
        "question": "Can a K9 team protect large outdoor sites with poor lighting?",
        "answer": "Yes. This is the exact environment where K9 units excel, as dogs do not rely on floodlights or line-of-sight to detect human presence."
      },
      {
        "question": "How are visitors warned that a security dog is on the grounds?",
        "answer": "Weather-proof boards on the fence line state that a trained security dog is working on site. That notice is in addition to the handler remaining with the dog."
      },
      {
        "question": "Is the dog under the handler's control at all times?",
        "answer": "Yes. The dog works on the handler's commands. It is not left to roam the site alone, and it is introduced to authorised staff so that routine access does not become a confrontation."
      }
    ]
  },
  "close-protection": {
    "heroKicker": "Executive Protection & Escort Services",
    "heroTitle": "Close Protection & Executive Escort Services",
    "heroSubtitle": "Discreet personal security officers and route planning for corporate leaders, visiting dignitaries, and high-profile individuals during UK travel.",
    "directAnswer": "Close protection assigns an officer to a person rather than to a building. The work covers meetings, travel between sites, and public appearances for the hours booked. It is for executives and private clients. SkyWatch provides this in Luton, Bedfordshire, Hertfordshire, and Greater London.",
    "relatedService": {
      "href": "/services/corporate-security",
      "label": "Corporate building and office security"
    },
    "problemSolved": {
      "title": "Discreet Personal Safety in Complex Environments",
      "body": "High-net-worth individuals, visiting foreign delegations, and corporate executives face bespoke security risks including targeted harassment, hostile media intrusion, stalkers, and travel vulnerability.",
      "points": [
        "Unscreened public encounters and aggressive confrontation during corporate appearances",
        "Travel vulnerabilities between hotels, meeting venues, and event locations",
        "Hostile media attention, paparazzi disruption, and privacy breach of family members",
        "Lack of medical emergency preparedness or advance route reconnaissance during UK visits",
        "Overly aggressive bodyguards who draw unwanted public attention and compromise business diplomacy"
      ]
    },
    "deploymentModel": {
      "title": "Close Protection Methodology",
      "intro": "Our executive escort philosophy emphasises low-profile discretion, meticulous advance planning, and calm protective awareness:",
      "steps": [
        {
          "step": "01",
          "title": "Threat & Risk Profile Analysis",
          "text": "We evaluate the principal's public profile, threat level, itinerary, and specific personal privacy concerns."
        },
        {
          "step": "02",
          "title": "Advance Reconnaissance (Recce)",
          "text": "We inspect hotel entrances, private dining venues, meeting rooms, secure holding areas, and emergency hospital routes."
        },
        {
          "step": "03",
          "title": "Discreet Close Protection Escort",
          "text": "Officers provide close protective escort, maintaining situational awareness without impeding business meetings."
        },
        {
          "step": "04",
          "title": "Secure Route Navigation",
          "text": "Close coordination with executive chauffeurs to ensure smooth arrivals and secure departures."
        }
      ]
    },
    "whatIsIncluded": {
      "title": "Close Protection Deliverables",
      "items": [
        {
          "title": "Close Protection Officers",
          "desc": "Officers who plan the visit in advance and stay with the principal during meetings and travel."
        },
        {
          "title": "Advance Venue & Route Planning",
          "desc": "Pre-visit surveys of meeting locations and hotels."
        },
        {
          "title": "Low-Profile Corporate Presentation",
          "desc": "Officers wear immaculate corporate business suits and blend discreetly into high-level business settings."
        },
        {
          "title": "Secure Travel & Chauffeur Coordination",
          "desc": "Seamless coordination with executive vehicle drivers for safe embussing and debussing."
        },
        { kind: "public-liability" }
      ]
    },
    "sectorsServed": {
      "title": "Clients We Support",
      "sectors": [
        {
          "name": "Corporate Executives & Board Members",
          "description": "Protection during shareholder AGMs, sensitive corporate negotiations, and public visits."
        },
        {
          "name": "Visiting International Delegations",
          "description": "Security escort for overseas business leaders and diplomatic guests visiting the UK."
        },
        {
          "name": "High-Net-Worth Families",
          "description": "Discreet family protection, residential security, and school run safety."
        },
        {
          "name": "Legal & Dispute Resolution Stakeholders",
          "description": "Personal safety escort for witnesses or legal counsel during high-profile court proceedings."
        }
      ]
    },
    "pricingFactors": {
      "title": "Close Protection Commercial Terms",
      "body": "Executive protection assignments are quoted on daily or project rates tailored to itinerary complexity:",
      "factors": [
        "Team size (solo close protection officer vs. principal escort and dedicated advance security driver)",
        "Assignment duration: single-day corporate event escort vs. multi-week UK itinerary",
        "Threat level and requirement for continuous 24-hour residential protection at hotel suites",
        "Travel requirements across Luton, Bedfordshire, Hertfordshire, and Greater London"
      ]
    },
    "faqs": [
      {
        "question": "Will close protection officers draw unwanted public attention?",
        "answer": "No. Our methodology focuses on low-profile discretion. Officers dress in corporate suits and maintain appropriate distance so meetings proceed naturally without public spectacle."
      },
      {
        "question": "Can a female principal request a female protection officer?",
        "answer": "Yes. Female close protection officers can be assigned for female principals, family members, or discreet corporate engagements."
      },
      {
        "question": "Do you provide secure executive vehicles?",
        "answer": "We coordinate with vetted executive chauffeur partners to provide luxury, secure vehicle transit alongside our security escort."
      },
      {
        "question": "How far in advance do we need to book close protection?",
        "answer": "We recommend booking several days in advance so the team can complete advance reconnaissance. Shorter notice depends on officer availability."
      },
      {
        "question": "How is an itinerary planned before the principal travels?",
        "answer": "We inspect the hotels, meeting rooms and travel legs in advance, note entry and exit points, and agree a discreet position for the officer so the diary can proceed without a public show of security."
      }
    ]
  },
};

const SIA_DEPLOY_SLUGS = new Set([
  "manned-security-guards",
  "door-supervision",
  "cctv-monitoring",
  "close-protection"
]);

function resolveIncludedItems(items) {
  if (!items) return items;
  const resolved = [];
  for (const item of items) {
    if (item.kind === "public-liability") {
      if (PUBLIC_LIABILITY_AMOUNT != null) {
        const label = `${PUBLIC_LIABILITY_AMOUNT} public liability insurance`;
        resolved.push({ title: label, desc: label });
      }
      continue;
    }
    resolved.push(item);
  }
  return resolved;
}

function getServicePageContent(slug) {
  // Support slug aliases
  const target = slug === "manned-guarding" ? "manned-security-guards" :
                 slug === "reception-concierge" ? "concierge-security" : slug;
  const data = SERVICE_DATA[target];
  if (!data) return null;

  const content = {
    ...data,
    whatIsIncluded: data.whatIsIncluded
      ? {
          ...data.whatIsIncluded,
          items: resolveIncludedItems(data.whatIsIncluded.items)
        }
      : data.whatIsIncluded
  };

  if (SIA_DEPLOY_SLUGS.has(target)) {
    content.siaDeployStatement = SIA_DEPLOY_STATEMENT;
  }

  if (target === "manned-security-guards") {
    content.workingMethods = [BS_7499_STATIC_GUARDING];
  } else if (target === "key-holding-alarm-response") {
    content.workingMethods = [BS_7984_KEY_HOLDING];
  }

  return content;
}

export {
  getServicePageContent
};
