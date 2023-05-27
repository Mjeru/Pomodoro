export default function Worker_fn() {
    return new Worker(__webpack_public_path__ + "server.worker.js");
}
