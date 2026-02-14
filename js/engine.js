let scanner;

async function startScanner() {
    document.getElementById('scanner-screen').classList.remove('hidden');
    document.getElementById('initial-screen').classList.add('hidden');
    document.querySelector('.action-buttons').classList.add('hidden');

    scanner = new Html5Qrcode("reader");
    const config = { fps: 20, qrbox: 280 };

    try {
        await scanner.start(
            { facingMode: "environment" }, 
            config,
            (decodedText) => {
                scanner.stop();
                document.getElementById('scanner-screen').classList.add('hidden');
                
                const url = new URL(decodedText);
                const params = new URLSearchParams(url.search);
                
                if(params.has('n')) {
                    showCard(params);
                } else {
                    alert("Invalid QR Code!");
                    location.reload();
                }
            }
        );
    } catch (err) {
        alert("Camera Permission Denied!");
        location.reload();
    }
}

function showCard(params) {
    document.getElementById('dispName').innerText = params.get('n');
    document.getElementById('dispDate').innerText = params.get('d');
    document.getElementById('dispAddr').innerText = params.get('a');
    document.getElementById('dispRef').innerText = params.get('r');
    document.getElementById('cardRefHeader').innerText = params.get('r');

    document.getElementById('verified-display').classList.remove('hidden');
}

// Auto-check if opened via QR Scan
window.onload = () => {
    const p = new URLSearchParams(window.location.search);
    if(p.has('n')) showCard(p);
};

