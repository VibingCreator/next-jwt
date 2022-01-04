// TODO: unblock the event loop
import crypto from "crypto";

const hash = (plaintext) => {
    return crypto.createHash("sha512").update(plaintext).digest("hex");
};

const compare = (plaintext, hashed) => {
    return hash(plaintext) === hashed;
};

export { hash, compare };