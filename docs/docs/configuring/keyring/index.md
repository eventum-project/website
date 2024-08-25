# Keyring

## Managing keyring

Keyring is a credentials storage for sensitive data. Eventum provides its own keyring management CLI tool `eventum-keyring` that uses encrypted file as a backend.

### Setting the value

```bash
eventum-keyring set <key name>
```

### Getting the value

```bash
eventum-keyring get <key name>
```

### Removing the value

```bash
eventum-keyring remove <key name>
```

## Keyring password

When you run keyring for the first time it will prompt you the password for the new encrypted storage.

Each time Eventum needs to retrieve data from keyring it will prompt you that password to get access. If you want to provide the keyring password to Eventum in non-interactive way you can set environment variable `EVENTUM_KEYRING_PASSWORD` with the value of the password.
