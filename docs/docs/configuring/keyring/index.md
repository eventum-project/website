# Keyring

## Managing keyring

Keyring is used as credentials storage for sensitive data that you need to provide to configuration.

### Setting the value

```bash
keyring set eventum <token name>
```

### Getting the value

```bash
keyring get eventum <token name>
```

### Deleting the value

```bash
keyring del eventum <token name>
```

## Keyring password

When you run keyring for the first time it will prompt you the password for the new encrypted storage.

Each time Eventum needs to retrieve data from keyring it will prompt you that password to get access. If you want to provide the keyring password to Eventum in non-interactive way you can set environment variable `EVENTUM_KEYRING_PASSWORD` with the value of the password.

## Troubleshooting

### Error `No recommended backend was available`

The error occurs when there is no available keyring backend is found. Eventum uses `keyrings-cryptfile` package as keyring backend.

:::tip[Solution]
Install keyring backend for used python version with next commands:
```bash
python3.11 -m pip install keyring
python3.11 -m pip install keyrings-cryptfile
```
:::
