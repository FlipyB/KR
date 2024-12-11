document.getElementById('connectButton').onclick = async () => {
    if (window.ethereum) {
        try {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []); // Запрос на подключение аккаунта
            signer = provider.getSigner(); // Получение текущего подписанта
            contract = new ethers.Contract(contractAddress, contractABI, signer); // Создание контракта
            console.log("Кошелек подключен");
           
            
            
            
        } catch (error) {
            console.error("Ошибка подключения:", error);
        }
    } else {
        alert("Будь-ласка встановіть Метамаск");
    }
};


document.getElementById('balance').onclick = async () => {
    
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);  // Запрашиваем подключение кошелька
        const signer = provider.getSigner();

        
        const contractAddress = "0x7dE424ec29235b4270baeFc0d4d6e0fE9cF18631"; 
        const contractABI = [{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"energyUsed","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"}],"name":"EnergyUsageReported","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"energyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"howmuch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"payForEnergy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"name":"setEnergyPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalEnergyUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]; 


        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Проверяем, что контракт доступен
        const balance = await contract.contractBalance();
        console.log("Контракт доступен. Баланс: ", balance.toString());
        document.getElementById('balanceTxt').innerText = `Сума: ${balance.toString()} wei`;

        return contract; // Возвращаем объект контракта
    } catch (error) {
        console.error("Ошибка при подключении к контракту:", error);
        alert("Не вдалось під'єднатись до контракту.");
        return null;
    }

};






document.getElementById('withdraw').onclick = async () =>  {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);  
        const signer = provider.getSigner();

        
        const contractAddress = "0x7dE424ec29235b4270baeFc0d4d6e0fE9cF18631"; 
        const contractABI = [{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"energyUsed","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"}],"name":"EnergyUsageReported","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"energyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"howmuch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"payForEnergy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"name":"setEnergyPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalEnergyUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]; 


        const contract = new ethers.Contract(contractAddress, contractABI, signer);


        // Вызываем функцию withdraw
        const tx = await contract.withdraw(); // Вызов функции withdraw

        // Ждем подтверждения транзакции
        await tx.wait();

        console.log("Вывод средств выполнен успешно!");
        alert("Виведення коштів успішне!");

    } catch (error) {
        console.error("Ошибка при выводе средств:", error);
        alert("Помилка при виведенні коштів. Перевірте консоль для подробиць.");
    }
}




document.getElementById('changePrice').onclick = async () =>  {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);  
        const signer = provider.getSigner();

        
        const contractAddress = "0x7dE424ec29235b4270baeFc0d4d6e0fE9cF18631"; 
        const contractABI = [{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"energyUsed","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"}],"name":"EnergyUsageReported","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"energyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"howmuch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"energyUsed","type":"uint256"}],"name":"payForEnergy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_energyPrice","type":"uint256"}],"name":"setEnergyPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalEnergyUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]; 


        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        const energyPrice = document.getElementById('inputField').value;
        
console.log("Смена цены: ", energyPrice.toString());

        const tx = await contract.setEnergyPrice(energyPrice); 

        
        await tx.wait();

        console.log("Зміна ціни успішна!");
        alert("Зміна ціна успішна!");

    } catch (error) {
        console.error("Ошибка при смене цены:", error);
        alert("Помилка при зміні ціни. Перевірте консоль для подробиць.");
    }
}




window.onload = function() {
    fetchData();
};

async function fetchData() {
    try {
        // Запрос на сервер для получения данных
        const response = await fetch('http://localhost:5501/api/data');
        const data = await response.json();

        
        const tableBody = document.querySelector("#data-table tbody");

        
        data.forEach(item => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.address}</td>
                <td>${item.energy_amount}</td>
                <td>${item.total}</td>
            `;

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
}
