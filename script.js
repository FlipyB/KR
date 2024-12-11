const contractAddress = "0x7dE424ec29235b4270baeFc0d4d6e0fE9cF18631"; 
const contractABI = [{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"energyUsed","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"}],"name":"EnergyUsageReported","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"energyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"howmuch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"payForEnergy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"name":"setEnergyPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalEnergyUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]; // Замените на ABI вашего контракта




let provider;
let signer;
let contract;


document.getElementById('connectButton').onclick = async () => {
    if (window.ethereum) {
        try {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []); 
            signer = provider.getSigner(); 
            contract = new ethers.Contract(contractAddress, contractABI, signer); 
            console.log("Кошелек подключен");
           
            window.location.href = 'page2.html';

            
            
            
        } catch (error) {
            console.error("Ошибка подключения:", error);
        }
    } else {
        alert("Будь-ласка встановіть Metamask");
    }
};







document.getElementById('callPrice').onclick = async () => {

    checkProvider();

    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);  
        const signer = provider.getSigner();

        
        const contractAddress = "0x7dE424ec29235b4270baeFc0d4d6e0fE9cF18631"; 
        const contractABI = [{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"energyUsed","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"}],"name":"EnergyUsageReported","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"energyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"howmuch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"payForEnergy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"name":"setEnergyPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalEnergyUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]; 


        const contract = new ethers.Contract(contractAddress, contractABI, signer);

       
        const price = await contract.energyPrice();
        console.log("Контракт доступен. Цена за единицу энергии: ", price.toString());
        document.getElementById('Price').innerText = `Ціна за одиницю энергії - ${price.toString()} wei`;

        return contract; 
    } catch (error) {
        console.error("Ошибка при подключении к контракту:", error);
        alert("Не вдалось під'єднатись до контракту контракту.");
        return null;
    }

        

}

document.getElementById('calculate').onclick = async () => {

    checkProvider();

    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);  
        const signer = provider.getSigner();

        // Адрес контракта и ABI
        const contractAddress = "0x7dE424ec29235b4270baeFc0d4d6e0fE9cF18631"; 
        const contractABI = [{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"energyUsed","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"}],"name":"EnergyUsageReported","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"energyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"howmuch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"payForEnergy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"name":"setEnergyPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalEnergyUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];


        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        
        const Howmuch = document.getElementById('inputField').value;
        const pricing= await contract.howmuch(Howmuch);
        console.log("Контракт доступен. Цена за единицу энергии: ", pricing.toString());
        document.getElementById('howmuch').innerText = `Ціна за енергію - ${pricing.toString()} wei`;

        return contract; 
    } catch (error) {
        console.error("Ошибка при подключении к контракту:", error);
        alert("Не вдалось під'єднатись до контракту контракту.");
        return null;
    }

        

}




async function checkProvider() {
    if (typeof window.ethereum === 'undefined') {
        alert("Ethereum провайдер не знайден. Встановіть MetaMask.");
        return false;
    }
    return true;
}






document.getElementById('payForEnergy').onclick = async () => {
     
   
    
    try {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send("eth_requestAccounts", []);  
const signer = provider.getSigner();

console.log('Подключение кошелька прошло успешно');

const contractAddress = "0x7dE424ec29235b4270baeFc0d4d6e0fE9cF18631"; 
const contractABI = [{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"energyUsed","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"}],"name":"EnergyUsageReported","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"energyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"howmuch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"payForEnergy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"name":"setEnergyPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalEnergyUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contract = new ethers.Contract(contractAddress, contractABI, signer);

// Получаем цену за энергию
const price = await contract.energyPrice();
console.log('Цена за энергию: ', price.toString());

// Получаем адрес кошелька
const walletAddress = await signer.getAddress();
console.log('Адрес кошелька:', walletAddress);

// Получаем сумму долга
const cost = await getTotalSum(walletAddress);
console.log('Сумма долга:', cost);

// Получаем количество энергии
const totalener = await getEnergySum(walletAddress);
console.log('Сумма энергии:', totalener);

// Конвертируем стоимость из wei в ether
const costInEther = ethers.utils.formatEther(cost);
console.log('Стоимость в ETH:', costInEther);

// Выполнение транзакции
const tx = await contract.payForEnergy(1, { value: cost });
console.log('Транзакция отправлена:', tx.hash);

// Ожидаем подтверждения транзакции
await tx.wait(); 
console.log('Транзакция подтверждена');

await addRowPayed(walletAddress, totalener, price.toString(), cost);
console.log('строка добавлена');
await deleteRows(walletAddress);
console.log('удалена');
alert(`Оплата за ${totalener} одиниць энергії на сумму ${costInEther} ETH успішно завершена.`);

    } catch (error) {
        console.error("Помилка при оплаті:", error);
        alert("Ошибка при оплате. Проверьте консоль для подробностей.");
    }
};



document.getElementById('send').onclick = async ()=>{

    try {
        
    
        

        const energyuse=Math.floor(Math.random() * (1000 - 10 + 1)) + 10;

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);  
        

        // Получаем "подписывающего" (signer)
        const signer = provider.getSigner();
        const walletAddress = await signer.getAddress();
        // Адрес контракта и ABI
        const contractAddress = "0x7dE424ec29235b4270baeFc0d4d6e0fE9cF18631"; // Замените на свой адрес
        const contractABI = [{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"energyUsed","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"}],"name":"EnergyUsageReported","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"energyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"howmuch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"payForEnergy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"name":"setEnergyPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalEnergyUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]; // Замените на ABI вашего контракта


        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Проверяем, что контракт доступен
        const price = await contract.energyPrice();

        const total= energyuse*price;

        await addRow(walletAddress,energyuse,price.toString(),total);
        

    
    } catch (error) {
        console.error("передачи показаний", error);
    }


}


document.getElementById('debts').onclick = async ()=>{

    try {

        // Запрашиваем доступ к аккаунтам в кошельке
       const energyuse=Math.floor(Math.random() * (1000 - 10 + 1)) + 10;

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);  
        

        // Получаем "подписывающего" (signer)
        const signer = provider.getSigner();
        const walletAddress = await signer.getAddress();

        const debtSumm=await getTotalSum(walletAddress);

    document.getElementById('debtsTx').innerText=`Сумма: ${debtSumm.toString()} wei`;
    } catch (error) {
        console.error("Ошибка запроса задолжности", error);
    }


}









































    async function addRow(address, energy_amount, price, total) {
        const data = { address, energy_amount, price, total };
        
        try {
            const response = await fetch('http://localhost:5501/api/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                const result = await response.text(); // Ответ от сервера
                console.log('Строка добавлена:', result);
                alert("Показания успешно отправленны");
            } else {
                console.error('Ошибка добавления строки:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка сети:', error);
        }
    }

    async function addRowPayed(address, energy_amount, price, total) {
        const data = { address, energy_amount, price, total };
        console.log('зашло в добавление строки оплаченых');
        
        try {
            const response = await fetch('http://localhost:5501/api/add_payed', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                const result = await response.text(); // Ответ от сервера
                console.log('Строка добавлена:', result);
                
            } else {
                console.error('Ошибка добавления строки:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка сети:', error);
        }
    }

    async function getTotalSum(address) {
        try {
            const response = await fetch(`http://localhost:5501/api/sum/${address}`);
            if (!response.ok) {
                throw new Error('Ошибка запроса');
            }
            
            const data = await response.json();
            console.log('Сумма задолженности:', data.total_sum);
            return data.total_sum; 
        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }
    }
    async function getEnergySum(address) {
        try {
            const response = await fetch(`http://localhost:5501/api/sum/energy_amount/${address}`);
            const data = await response.json();
    
            
            console.log('Сумма energy_amount для адреса', address, ':', data.total_energy);
            return data.total_energy; 
        } catch (error) {
            console.error('Ошибка при запросе суммы:', error);
        }
    }









    async function deleteRows(address) {
        console.log('зашло в удаление строки');
        try {
            const response = await fetch(`http://localhost:5501/api/delete/${address}`, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                const result = await response.text(); // Ответ от сервера
                console.log('Удаление завершено:', result);
            } else {
                console.error('Ошибка удаления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка сети:', error);
        }
    }
    
    // Пример вызова функции
    

















