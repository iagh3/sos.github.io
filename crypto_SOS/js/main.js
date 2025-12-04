const cryptoData = {
    bitcoin: {
        id: "bitcoin",
        price: 92326,
        change: 14.04,
        history: [],
        priceHistory: [],
        timestampHistory: [],
        color: "#F7931A",
        lastUpdate: null,
    },
    ethereum: {
        id: "ethereum",
        price: 3800,
        change: 43.04,
        history: [],
        priceHistory: [],
        timestampHistory: [],
        color: "#627EEA",
        lastUpdate: null,
    },
    solana: {
        id: "solana",
        price: 142,
        change: -14.23,
        history: [],
        priceHistory: [],
        timestampHistory: [],
        color: "#00FFA3",
        lastUpdate: null,
    },
    doge: {
        id: "dogecoin",
        price: 0.284,
        change: 17.06,
        history: [],
        priceHistory: [],
        timestampHistory: [],
        color: "#C2A633",
        lastUpdate: null,
    },
};

function formatNumber(num) {
    if (num >= 1000) {
        return num.toLocaleString("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    } else if (num >= 1) {
        return num.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    } else {
        return num.toLocaleString("en-US", {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
        });
    }
}

async function getRealCryptoPrices() {
    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,dogecoin&vs_currencies=usd"
        );

        if (!response.ok) {
            throw new Error(`Ошибка API: ${response.status}`);
        }

        const data = await response.json();
        const now = Date.now();

        if (data.bitcoin) {
            const newPrice = data.bitcoin.usd;

            cryptoData.bitcoin.priceHistory.push(newPrice);
            cryptoData.bitcoin.timestampHistory.push(now);

            const thirtyMinutesAgo = now - 30 * 60 * 1000;
            const recentIndices = cryptoData.bitcoin.timestampHistory
                .map((timestamp, index) => ({ timestamp, index }))
                .filter((item) => item.timestamp >= thirtyMinutesAgo)
                .map((item) => item.index);

            cryptoData.bitcoin.priceHistory = recentIndices.map(
                (i) => cryptoData.bitcoin.priceHistory[i]
            );
            cryptoData.bitcoin.timestampHistory = recentIndices.map(
                (i) => cryptoData.bitcoin.timestampHistory[i]
            );

            if (cryptoData.bitcoin.priceHistory.length > 1) {
                const firstPrice = cryptoData.bitcoin.priceHistory[0];
                const currentPrice =
                    cryptoData.bitcoin.priceHistory[
                        cryptoData.bitcoin.priceHistory.length - 1
                    ];
                cryptoData.bitcoin.change =
                    ((currentPrice - firstPrice) / firstPrice) * 100;
            }

            cryptoData.bitcoin.price = newPrice;
            cryptoData.bitcoin.lastUpdate = now;
        }

        if (data.ethereum) {
            const newPrice = data.ethereum.usd;

            cryptoData.ethereum.priceHistory.push(newPrice);
            cryptoData.ethereum.timestampHistory.push(now);

            const thirtyMinutesAgo = now - 30 * 60 * 1000;
            const recentIndices = cryptoData.ethereum.timestampHistory
                .map((timestamp, index) => ({ timestamp, index }))
                .filter((item) => item.timestamp >= thirtyMinutesAgo)
                .map((item) => item.index);

            cryptoData.ethereum.priceHistory = recentIndices.map(
                (i) => cryptoData.ethereum.priceHistory[i]
            );
            cryptoData.ethereum.timestampHistory = recentIndices.map(
                (i) => cryptoData.ethereum.timestampHistory[i]
            );

            if (cryptoData.ethereum.priceHistory.length > 1) {
                const firstPrice = cryptoData.ethereum.priceHistory[0];
                const currentPrice =
                    cryptoData.ethereum.priceHistory[
                        cryptoData.ethereum.priceHistory.length - 1
                    ];
                cryptoData.ethereum.change =
                    ((currentPrice - firstPrice) / firstPrice) * 100;
            }

            cryptoData.ethereum.price = newPrice;
            cryptoData.ethereum.lastUpdate = now;
        }

        if (data.solana) {
            const newPrice = data.solana.usd;

            cryptoData.solana.priceHistory.push(newPrice);
            cryptoData.solana.timestampHistory.push(now);

            const thirtyMinutesAgo = now - 30 * 60 * 1000;
            const recentIndices = cryptoData.solana.timestampHistory
                .map((timestamp, index) => ({ timestamp, index }))
                .filter((item) => item.timestamp >= thirtyMinutesAgo)
                .map((item) => item.index);

            cryptoData.solana.priceHistory = recentIndices.map(
                (i) => cryptoData.solana.priceHistory[i]
            );
            cryptoData.solana.timestampHistory = recentIndices.map(
                (i) => cryptoData.solana.timestampHistory[i]
            );

            if (cryptoData.solana.priceHistory.length > 1) {
                const firstPrice = cryptoData.solana.priceHistory[0];
                const currentPrice =
                    cryptoData.solana.priceHistory[
                        cryptoData.solana.priceHistory.length - 1
                    ];
                cryptoData.solana.change =
                    ((currentPrice - firstPrice) / firstPrice) * 100;
            }

            cryptoData.solana.price = newPrice;
            cryptoData.solana.lastUpdate = now;
        }

        if (data.dogecoin) {
            const newPrice = data.dogecoin.usd;

            cryptoData.doge.priceHistory.push(newPrice);
            cryptoData.doge.timestampHistory.push(now);

            const thirtyMinutesAgo = now - 30 * 60 * 1000;
            const recentIndices = cryptoData.doge.timestampHistory
                .map((timestamp, index) => ({ timestamp, index }))
                .filter((item) => item.timestamp >= thirtyMinutesAgo)
                .map((item) => item.index);

            cryptoData.doge.priceHistory = recentIndices.map(
                (i) => cryptoData.doge.priceHistory[i]
            );
            cryptoData.doge.timestampHistory = recentIndices.map(
                (i) => cryptoData.doge.timestampHistory[i]
            );

            if (cryptoData.doge.priceHistory.length > 1) {
                const firstPrice = cryptoData.doge.priceHistory[0];
                const currentPrice =
                    cryptoData.doge.priceHistory[
                        cryptoData.doge.priceHistory.length - 1
                    ];
                cryptoData.doge.change =
                    ((currentPrice - firstPrice) / firstPrice) * 100;
            }

            cryptoData.doge.price = newPrice;
            cryptoData.doge.lastUpdate = now;
        }

        return true;
    } catch (error) {
        console.error("Ошибка получения реальных цен:", error);
        updateWithSmallRandomChanges();
        return false;
    }
}

function updateWithSmallRandomChanges() {
    const now = Date.now();

    Object.keys(cryptoData).forEach((cryptoKey) => {
        const crypto = cryptoData[cryptoKey];

        const change = (Math.random() - 0.5) * 0.4;
        const changeMultiplier = 1 + change / 100;

        crypto.priceHistory.push(crypto.price * changeMultiplier);
        crypto.timestampHistory.push(now);

        const thirtyMinutesAgo = now - 30 * 60 * 1000;
        const recentIndices = crypto.timestampHistory
            .map((timestamp, index) => ({ timestamp, index }))
            .filter((item) => item.timestamp >= thirtyMinutesAgo)
            .map((item) => item.index);

        crypto.priceHistory = recentIndices.map((i) => crypto.priceHistory[i]);
        crypto.timestampHistory = recentIndices.map(
            (i) => crypto.timestampHistory[i]
        );

        if (crypto.priceHistory.length > 1) {
            const firstPrice = crypto.priceHistory[0];
            const currentPrice =
                crypto.priceHistory[crypto.priceHistory.length - 1];
            crypto.change = ((currentPrice - firstPrice) / firstPrice) * 100;
        }

        crypto.price = crypto.price * changeMultiplier;
        crypto.lastUpdate = now;

        crypto.history.push(crypto.price);
        if (crypto.history.length > 10) {
            crypto.history.shift();
        }
    });
}

async function updateCryptoData() {
    const success = await getRealCryptoPrices();

    if (!success) {
        console.log("Используются случайные изменения (ошибка API)");
    }

    Object.keys(cryptoData).forEach((cryptoKey) => {
        updateCryptoDisplay(cryptoData[cryptoKey]);
    });
}

function updateCryptoDisplay(crypto) {
    let priceSelector, changeSelector, chartContainer;

    switch (crypto.id) {
        case "bitcoin":
            priceSelector = ".price-btc .gc_span-three";
            changeSelector = ".price-btc .gc_span-two";
            chartContainer = ".price-btc .chart svg path";
            break;
        case "ethereum":
            priceSelector = ".price-eth .gc_span-three";
            changeSelector = ".price-eth .gc_span-two";
            chartContainer = ".price-eth .chart svg path";
            break;
        case "solana":
            priceSelector = ".price-sol .gc_span-three";
            changeSelector = ".price-sol .gc_span-two";
            chartContainer = ".price-sol .chart svg path";
            break;
        case "dogecoin":
            priceSelector = ".price-doge .gc_span-three";
            changeSelector = ".price-doge .gc_span-two";
            chartContainer = ".price-doge .chart svg path";
            break;
    }

    const priceElement = document.querySelector(priceSelector);
    if (priceElement) {
        if (crypto.id === "dogecoin") {
            priceElement.textContent = `${crypto.price.toFixed(3).replace(".", ",")}$`;
        } else {
            priceElement.textContent = `${formatNumber(crypto.price)}$`;
        }
    }

    const changeElement = document.querySelector(changeSelector);
    if (changeElement) {
        changeElement.textContent = `${crypto.change >= 0 ? "+" : ""}${crypto.change.toFixed(2)}%`;

        if (crypto.change >= 0) {
            changeElement.style.color = "var(--color-4)";
        } else {
            changeElement.style.color = "var(--color-5)";
        }
    }

    updateChart(crypto, chartContainer);
}

function updateChart(crypto, chartSelector) {
    const chartElement = document.querySelector(chartSelector);
    if (!chartElement) return;

    const prices =
        crypto.history.length > 0
            ? crypto.history
            : [
                  crypto.price,
                  crypto.price * 0.99,
                  crypto.price * 1.01,
                  crypto.price * 0.98,
                  crypto.price * 1.02,
                  crypto.price * 0.99,
                  crypto.price * 1.01,
                  crypto.price,
                  crypto.price * 1.005,
                  crypto.price * 0.995,
              ];

    if (prices.length < 2) return;

    const width = 120;
    const height = 60;

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const range = maxPrice - minPrice || 1;

    let pathData = "";

    prices.forEach((price, index) => {
        const x = (index / (prices.length - 1)) * width;
        const y = height - ((price - minPrice) / range) * height;

        if (index === 0) {
            pathData += `M ${x},${y}`;
        } else {
            pathData += ` L ${x},${y}`;
        }
    });

    if (chartElement) {
        chartElement.setAttribute("d", pathData);
        chartElement.setAttribute(
            "stroke",
            crypto.change >= 0 ? "#10b981" : "#ef4444"
        );
    }
}

function initializePriceHistory() {
    Object.keys(cryptoData).forEach((cryptoKey) => {
        const crypto = cryptoData[cryptoKey];

        if (crypto.history.length === 0) {
            for (let i = 0; i < 10; i++) {
                const fluctuation = 1 + (Math.random() - 0.5) * 0.002;
                crypto.history.push(crypto.price * fluctuation);
            }
        }

        let chartSelector;
        switch (crypto.id) {
            case "bitcoin":
                chartSelector = ".price-btc .chart svg path";
                break;
            case "ethereum":
                chartSelector = ".price-eth .chart svg path";
                break;
            case "solana":
                chartSelector = ".price-sol .chart svg path";
                break;
            case "dogecoin":
                chartSelector = ".price-doge .chart svg path";
                break;
        }

        updateChart(crypto, chartSelector);
    });
}

function createUpdateIndicator() {
    if (document.getElementById("update-indicator")) return;

    const updateIndicator = document.createElement("div");
    updateIndicator.id = "update-indicator";
    updateIndicator.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(30, 41, 59, 0.9);
        color: white;
        padding: 10px 15px;
        border-radius: 8px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        font-family: inherit;
    `;

    const dot = document.createElement("div");
    dot.id = "update-dot";
    dot.style.cssText = `
        width: 8px;
        height: 8px;
        background-color: #10b981;
        border-radius: 50%;
        animation: pulse 1.5s infinite;
    `;

    const text = document.createElement("span");
    text.id = "update-time";
    text.textContent = "Обновление каждые 30 сек";

    updateIndicator.appendChild(dot);
    updateIndicator.appendChild(text);

    const style = document.createElement("style");
    style.textContent = `
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(updateIndicator);
}

function updateLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const updateTimeElement = document.getElementById("update-time");
    if (updateTimeElement) {
        updateTimeElement.textContent = `Обновлено: ${timeString}`;
    }
}

function initTradeButtons() {
    const tradeButtons = document.querySelectorAll(
        ".trade-btc, .trade-eth, .trade-sol, .trade-doge"
    );

    tradeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            let cryptoName = "";

            if (button.classList.contains("trade-btc")) {
                cryptoName = "Bitcoin";
            } else if (button.classList.contains("trade-eth")) {
                cryptoName = "Ethereum";
            } else if (button.classList.contains("trade-sol")) {
                cryptoName = "Solana";
            } else if (button.classList.contains("trade-doge")) {
                cryptoName = "Doge";
            }

            alert(
                `Торговая панель для ${cryptoName} будет открыта в реальном приложении. В демо-версии цены обновляются каждые 30 секунд.`
            );
        });
    });
}

function initViewOtherCryptoButton() {
    const viewOtherBtn = document.querySelector(".btn-other__crypto");
    if (viewOtherBtn) {
        viewOtherBtn.addEventListener("click", function () {
            alert("В демо-версии функционал ограничен.");
        });
    }
}

async function initializeCryptoPrices() {
    await getRealCryptoPrices();

    Object.keys(cryptoData).forEach((cryptoKey) => {
        const crypto = cryptoData[cryptoKey];
        if (crypto.history.length === 0 && crypto.price > 0) {
            for (let i = 0; i < 10; i++) {
                const fluctuation = 1 + (Math.random() - 0.5) * 0.002;
                crypto.history.push(crypto.price * fluctuation);
            }
        }
    });
}

async function initCryptoUpdater() {
    createUpdateIndicator();

    await initializeCryptoPrices();

    initializePriceHistory();

    initTradeButtons();
    initViewOtherCryptoButton();

    Object.keys(cryptoData).forEach((cryptoKey) => {
        updateCryptoDisplay(cryptoData[cryptoKey]);
    });

    updateLastUpdateTime();

    setInterval(async () => {
        await updateCryptoData();
        updateLastUpdateTime();
    }, 30000);

    setTimeout(async () => {
        await updateCryptoData();
        updateLastUpdateTime();
    }, 5000);
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(initCryptoUpdater, 1000);
});

const swapBtn = document.getElementById("swapBtn");
const row = document.querySelector(".row");
const buyBtn = document.querySelector(".buy__crypto");
const sellBtn = document.querySelector(".sell__crypto");

const iconUSD = document.getElementById("Icon_usd");
const iconRUB = document.getElementById("Icon_rub");

const iconBTC = document.getElementById("Icon_btc");
const iconETH = document.getElementById("Icon_eth");
const iconSOL = document.getElementById("Icon_sol");
const iconDOGE = document.getElementById("Icon_doge");

let rates = {
    USD: 1,
    RUB: 1,
    BTC: 1,
    ETH: 1,
    SOL: 1,
    DOGE: 1,
};

async function loadRates() {
    try {
        const cryptoRes = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,dogecoin&vs_currencies=usd,rub"
        );
        const crypto = await cryptoRes.json();

        const fiatRes = await fetch("https://open.er-api.com/v6/latest/USD");
        const fiat = await fiatRes.json();

        rates = {
            USD: 1,
            RUB: fiat.rates.RUB,

            BTC: crypto.bitcoin.usd,
            ETH: crypto.ethereum.usd,
            SOL: crypto.solana.usd,
            DOGE: crypto.dogecoin.usd,
        };

        convert();
    } catch (error) {
        console.error("Ошибка загрузки курсов:", error);
    }
}

function convert() {
    const boxes = document.querySelectorAll(".row > .box");
    const leftBox = boxes[0];
    const rightBox = boxes[1];

    const leftInput = leftBox.querySelector("input");
    const rightInput = rightBox.querySelector("input");
    const leftSelect = leftBox.querySelector("select");
    const rightSelect = rightBox.querySelector("select");

    const from = leftSelect.value;
    const to = rightSelect.value;
    const value = parseFloat(leftInput.value) || 0;

    const valueInUSD =
        value * (from === "USD" ? 1 : rates[from] / rates["USD"]);
    const result = valueInUSD / rates[to];

    rightInput.value = result.toFixed(6);
}

function activateBuy() {
    buyBtn.classList.add("active");
    sellBtn.classList.remove("active");
}
function activateSell() {
    sellBtn.classList.add("active");
    buyBtn.classList.remove("active");
}

buyBtn.addEventListener("click", activateBuy);
sellBtn.addEventListener("click", activateSell);

function updateBoxRefs() {
    const boxes = document.querySelectorAll(".row > .box");
    const leftBox = boxes[0];
    const rightBox = boxes[1];

    const leftInput = leftBox.querySelector("input");
    const rightInput = rightBox.querySelector("input");
    const leftSelect = leftBox.querySelector("select");
    const rightSelect = rightBox.querySelector("select");

    leftInput.disabled = false;
    rightInput.disabled = true;

    leftInput.oninput = convert;
    leftSelect.onchange = () => {
        convert();
        updateIcons(leftSelect.value, rightSelect.value);
    };
    rightSelect.onchange = () => {
        convert();
        updateIcons(leftSelect.value, rightSelect.value);
    };

    updateIcons(leftSelect.value, rightSelect.value);
}

function updateIcons(leftCurrency, rightCurrency) {
    const iconUSD = document.getElementById("Icon_usd");
    const iconRUB = document.getElementById("Icon_rub");
    const iconBTC = document.getElementById("Icon_btc");
    const iconETH = document.getElementById("Icon_eth");
    const iconSOL = document.getElementById("Icon_sol");
    const iconDOGE = document.getElementById("Icon_doge");

    const allIcons = [iconUSD, iconRUB, iconBTC, iconETH, iconSOL, iconDOGE];

    allIcons.forEach((i) => {
        if (i) {
            i.style.display = "none";
            i.style.opacity = 0;
        }
    });

    const boxes = document.querySelectorAll(".row > .box");
    if (boxes.length < 2) return;

    const leftBox = boxes[0];
    const leftSelect = leftBox.querySelector("select");
    const rightBox = boxes[1];
    const rightSelect = rightBox.querySelector("select");

    const leftOptions = leftSelect
        ? Array.from(leftSelect.options).map((o) => o.value)
        : [];
    const rightOptions = rightSelect
        ? Array.from(rightSelect.options).map((o) => o.value)
        : [];

    if (leftOptions.includes("USD") || leftOptions.includes("RUB")) {
        if (leftCurrency === "USD" && iconUSD) {
            iconUSD.style.display = "block";
            setTimeout(() => (iconUSD.style.opacity = 1), 10);
        }
        if (leftCurrency === "RUB" && iconRUB) {
            iconRUB.style.display = "block";
            setTimeout(() => (iconRUB.style.opacity = 1), 10);
        }
    } else {
        let icon = null;
        if (leftCurrency === "BTC") icon = iconBTC;
        if (leftCurrency === "ETH") icon = iconETH;
        if (leftCurrency === "SOL") icon = iconSOL;
        if (leftCurrency === "DOGE") icon = iconDOGE;
        if (icon) {
            icon.style.display = "block";
            setTimeout(() => (icon.style.opacity = 1), 10);
        }
    }

    if (
        rightOptions.includes("BTC") ||
        rightOptions.includes("ETH") ||
        rightOptions.includes("SOL") ||
        rightOptions.includes("DOGE")
    ) {
        let icon = null;
        if (rightCurrency === "BTC") icon = iconBTC;
        if (rightCurrency === "ETH") icon = iconETH;
        if (rightCurrency === "SOL") icon = iconSOL;
        if (rightCurrency === "DOGE") icon = iconDOGE;
        if (icon) {
            icon.style.display = "block";
            setTimeout(() => (icon.style.opacity = 1), 10);
        }
    } else if (rightOptions.includes("USD") || rightOptions.includes("RUB")) {
        if (rightCurrency === "USD" && iconUSD) {
            iconUSD.style.display = "block";
            setTimeout(() => (iconUSD.style.opacity = 1), 10);
        }
        if (rightCurrency === "RUB" && iconRUB) {
            iconRUB.style.display = "block";
            setTimeout(() => (iconRUB.style.opacity = 1), 10);
        }
    }
}

function swapBoxes() {
    const boxes = document.querySelectorAll(".row > .box");
    if (boxes.length === 2) {
        const leftBox = boxes[0];
        const rightBox = boxes[1];

        const leftInput = leftBox.querySelector("input");
        const rightInput = rightBox.querySelector("input");
        const leftSelect = leftBox.querySelector("select");
        const rightSelect = rightBox.querySelector("select");

        const leftValue = leftInput.value;
        const rightValue = rightInput.value;
        const leftCurrency = leftSelect.value;
        const rightCurrency = rightSelect.value;

        const leftBoxHTML = leftBox.innerHTML;
        const rightBoxHTML = rightBox.innerHTML;

        const leftSelectOptions = Array.from(leftSelect.options);
        const rightSelectOptions = Array.from(rightSelect.options);

        leftBox.innerHTML = rightBoxHTML;
        rightBox.innerHTML = leftBoxHTML;

        const newLeftInput = leftBox.querySelector("input");
        const newRightInput = rightBox.querySelector("input");
        const newLeftSelect = leftBox.querySelector("select");
        const newRightSelect = rightBox.querySelector("select");

        newLeftInput.value = rightValue;
        newRightInput.value = leftValue;

        const newLeftOptions = Array.from(newLeftSelect.options);
        const leftOptionToSelect = newLeftOptions.find(
            (opt) => opt.value === rightCurrency
        );
        if (leftOptionToSelect) leftOptionToSelect.selected = true;

        const newRightOptions = Array.from(newRightSelect.options);
        const rightOptionToSelect = newRightOptions.find(
            (opt) => opt.value === leftCurrency
        );
        if (rightOptionToSelect) rightOptionToSelect.selected = true;

        updateBoxRefs();
        convert();
    }
}

swapBtn.addEventListener("click", swapBoxes);

loadRates();
setInterval(loadRates, 30000);
updateBoxRefs();

// ! Курсор
const cursor = document.getElementById("cursor");
let mouseX = 0,
    mouseY = 0;
let cursorX = 0,
    cursorY = 0;
const speed = 0.15;

const trailCount = 8;
const trailElements = [];
for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement("div");
    trail.classList.add("cursor-trail");
    document.body.appendChild(trail);
    trailElements.push(trail);
}

function animateCursor() {
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    trailElements.forEach((trail, index) => {
        const factor = (index + 1) / trailCount;
        const trailX = cursorX + (mouseX - cursorX) * factor;
        const trailY = cursorY + (mouseY - cursorY) * factor;
        trail.style.left = trailX + "px";
        trail.style.top = trailY + "px";
        trail.style.opacity = 0.3 - factor * 0.2;
        trail.style.transform = `translate(-50%, -50%) scale(${1 - factor * 0.5})`;
    });

    requestAnimationFrame(animateCursor);
}

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

animateCursor();

const hoverElements = document.querySelectorAll("a, button, .btn, .clickable");
hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
});
