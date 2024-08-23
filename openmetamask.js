function openMetaMask() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        window.location.href = "https://metamask.app.link/dapp/spontaneous-brigadeiros-cac2a7.netlify.app/";
    } else {
        // Optionally handle desktop behavior
        connectWallet();
    }
}
