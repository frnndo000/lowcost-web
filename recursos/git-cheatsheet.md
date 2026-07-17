# 🧾 Chuleta — Git y Terminal

> Comandos que usamos día a día. Si dudas de uno, míralo aquí antes de improvisar.

---

## 📁 Moverse por carpetas (terminal)

| Comando | Qué hace |
|---|---|
| `pwd` | Dónde estoy parado ahora |
| `ls` | Qué archivos/carpetas hay aquí |
| `cd nombre-carpeta` | Entrar a una carpeta (bajar) |
| `cd ..` | Subir un nivel |
| `cd ../../..` | Subir tres niveles (de `fernando` a la raíz del repo) |
| `cd` (solo, en Windows) | No hace nada útil — siempre dale un destino |
| `clear` | Limpiar la pantalla de la terminal |

> **Regla de oro:** antes de correr `git add`, `npx` o cualquier cosa con archivos,
> mira la última línea del prompt y confirma en qué carpeta estás.

---

## 🔄 El ciclo diario de trabajo

```bash
git pull                    # 1. ANTES de empezar: bajar lo último
# ...trabajas...
git add .                   # 2. Preparar los cambios (desde la RAÍZ del repo)
git commit -m "mensaje"     # 3. Guardar una "foto" con un mensaje claro
git push                    # 4. AL TERMINAR: subir a GitHub
```

> **Regla:** `pull` antes, `push` después. Commitea siempre desde la raíz del repo.

---

## 📸 Comandos básicos

| Comando | Qué hace |
|---|---|
| `git status` | Ver qué cambió, qué está listo para commitear |
| `git add archivo.txt` | Preparar UN archivo para el commit |
| `git add .` | Preparar TODO lo que cambió (desde donde estás hacia abajo) |
| `git commit -m "mensaje"` | Guardar los cambios preparados |
| `git push` | Subir tus commits a GitHub |
| `git pull` | Bajar los commits de GitHub a tu máquina |
| `git log --oneline` | Ver el historial de commits, resumido |

> **Ojo:** `git add` solo ve la carpeta actual **hacia abajo**, nunca hacia arriba.
> Para agarrar todo el proyecto, párate en la raíz del repo.

---

## 🌿 Ramas (branches)

| Comando | Qué hace |
|---|---|
| `git branch` | Ver en qué rama estoy y qué ramas existen |
| `git checkout -b mi-rama` | Crear una rama nueva Y moverme a ella |
| `git checkout main` | Volver a la rama principal |
| `git checkout nombre-rama` | Cambiarme a una rama que ya existe |
| `git push -u origin mi-rama` | Subir una rama nueva a GitHub por primera vez |
| `git branch -d mi-rama` | Borrar una rama local (cuando ya se mergeó) |

> **Flujo con ramas:** `git pull` en main → `git checkout -b feature` → trabajar →
> commit → `git push -u origin feature` → abrir Pull Request en GitHub.

---

## 🆘 Sacarme de un problema

| Situación | Solución |
|---|---|
| `git push` rechazado ("fetch first") | `git pull` y después `git push` |
| Quedé atrapado en Vim | `Esc`, luego escribir `:wq` y Enter |
| Quiero descartar cambios de un archivo sin guardar | `git restore archivo.txt` |
| Me equivoqué en el último mensaje de commit (aún no hice push) | `git commit --amend -m "nuevo mensaje"` |
| Ver qué rama y estado tengo | `git status` |

---

## ⚙️ Configuración (se hace una sola vez por máquina)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tucorreo@delgithub.com"
git config --global core.editor "code --wait"     # usar VS Code en vez de Vim
git config --global --list                         # ver la config actual
```

---

## 🚫 Warnings que son normales (ignorar)

- `LF will be replaced by CRLF` → normal en Windows, Git normaliza fines de línea
- `did not match any files` → estás en la carpeta equivocada, revisa con `pwd`

---

## 📝 Buenas prácticas de commits

- Un commit = un cambio con sentido propio (no mezclar config + feature + fix)
- Mensajes claros: "Agregar footer con contacto" mejor que "cambios"
- `closes #3` en el mensaje cierra automáticamente el issue #3 al mergear
- Commit diario, aunque sea chico
