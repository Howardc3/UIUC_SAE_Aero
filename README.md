# SAE Aero @ UIUC

Monorepo for the SAE Aero Design club website at the University of Illinois Urbana-Champaign.

| Folder | What it is |
| --- | --- |
| [`frontend/`](frontend) | The website — Next.js 16 + React 19 + Tailwind v4. Our project exists here! |
| [`backend/`](backend) | A FastAPI + Firebase/Firestore API. Not necessary, is just useless boilerplate right now. Don't bother working with this.|

## Run the website locally

```bash
cd frontend
npm install
npm run dev
```

Open <http://localhost:3000>. Requires Node.js 20.9+.

Full instructions, project layout, and troubleshooting live in
[frontend/README.md](frontend/README.md).

## Run the backend - SKIP THIS STEP. OUR WEBSITE DOESN'T NEED A BACKEND.

The website doesn't call the API yet, so you only need this if you're working on the API itself.

```bash
cd backend
python -m venv venv                  # first time only
venv\Scripts\activate                # Windows  (macOS/Linux: source venv/bin/activate)
pip install -r requirements.txt      # first time only
uvicorn main:app --reload
```

Serves on <http://localhost:8000>; interactive docs at <http://localhost:8000/docs>.

Run it from inside `backend/` — `main.py` loads `serviceAccountKey.json` by relative path.
That key is a Firebase service account credential: it is gitignored and **must never be
committed**. Ask an exec for a copy if you don't have one.

Firestore security rules and indexes are in [`firestore.rules`](firestore.rules) and
[`firestore.indexes.json`](firestore.indexes.json).
