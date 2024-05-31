# Installation

## Prerequisites

Eventum requires **Python 3.11** or later version to be installed.

Supported platforms are **Windows**, **Linux** and **MacOS**.

## Components
Eventum includes next components:
- Eventum CLI - command line interface for running the generator
- Eventum Studio - web application for content designing 

## Installation

### Using PipX

To install Eventum CLI:
```bash
pipx install eventum-cli
```

To install Eventum Studio:
```bash
pipx install eventum-studio
```

### Using Pip

#### Create virtual environment (optionally)

For Windows users:
```bash
cd %HOMEPATH%
python -m venv venv
venv\Scripts\activate
```

For Linux and MacOS users:
```bash
cd
python3 -m venv venv
source venv/bin/activate
```

#### Install package
To install Eventum CLI:
```bash
pip install eventum-cli
```

To install Eventum Studio:
```bash
pip install eventum-studio
```

### From source

Installation using source code requires **Poetry** to be installed.

#### Clone the repository

Repositories:
- EventumCLI: `https://github.com/Eventum-Generatives/EventumCLI.git`
- EventumStudio: `https://github.com/Eventum-Generatives/EventumStudio.git`

```bash
git clone <repository url>
cd <repository name>
```

#### Install dependencies
```bash
poetry install
poetry shell
```

---

<p align="center">
    ✨ Now we are ready to run Eventum! ✨
</p>