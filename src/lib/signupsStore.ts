import fs from 'fs';
import path from 'path';

export type QualificationData = {
    businessModel: string;
    status: string;
    techNeeds: string;
    timeline: string;
};

export type ContactData = {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    phone: string;
    telegram?: string;
};

export type SignupPayload = {
    qualification: QualificationData;
    contact: ContactData;
};

export type SignupRecord = SignupPayload & {
    id: string;
    createdAt: string;
};

const DATA_DIR = path.join(process.cwd(), 'data');
const SIGNUPS_FILE = path.join(DATA_DIR, 'signups.json');

function ensureStore() {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(SIGNUPS_FILE)) {
        fs.writeFileSync(SIGNUPS_FILE, JSON.stringify([]), 'utf8');
    }
}

export function appendSignup(signup: SignupPayload): SignupRecord {
    ensureStore();
    const raw = fs.readFileSync(SIGNUPS_FILE, 'utf8') || '[]';
    const parsed: SignupRecord[] = JSON.parse(raw);

    const record: SignupRecord = {
        ...signup,
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        createdAt: new Date().toISOString(),
    };

    parsed.push(record);
    fs.writeFileSync(SIGNUPS_FILE, JSON.stringify(parsed, null, 2), 'utf8');
    return record;
}

export function getAllSignups(): SignupRecord[] {
    ensureStore();
    const raw = fs.readFileSync(SIGNUPS_FILE, 'utf8') || '[]';
    return JSON.parse(raw);
}
