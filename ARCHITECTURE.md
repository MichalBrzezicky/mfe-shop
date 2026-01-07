# Architecture Overview

This project uses a shell-centric microfrontend architecture.

## Architectural Principles

- Each microfrontend represents a domain boundary
- The shell application owns the application runtime (Vue, Pinia)
- Microfrontends must not access each other’s internal state
- Cross-microfrontend communication is event-driven only
- Application-level state (e.g. cart) is shared intentionally

## What is NOT allowed

- Importing Pinia stores from another microfrontend
- Direct synchronous calls between microfrontends
- Initializing application-level state outside the shell

## Why this approach was chosen

This architecture is a deliberate compromise between:

- runtime isolation
- development complexity
- user experience

Pure runtime-isolated microfrontends were not chosen due to UX and maintenance costs.
