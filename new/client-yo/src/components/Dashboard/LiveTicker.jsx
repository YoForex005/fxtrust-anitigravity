import React, { useState, useEffect } from 'react';

// Real ethnic names - Indian, Southeast Asian, Chinese, Middle Eastern, African
const firstNames = [
    // Indian names
    'Arjun', 'Priya', 'Rahul', 'Ananya', 'Vikram', 'Sneha', 'Rohan', 'Kavitha', 'Aditya', 'Divya',
    'Suresh', 'Lakshmi', 'Rajesh', 'Meera', 'Karthik', 'Pooja', 'Sanjay', 'Deepa', 'Nikhil', 'Swathi',
    'Harish', 'Anjali', 'Venkat', 'Nisha', 'Prasad', 'Ritu', 'Manoj', 'Shalini', 'Ganesh', 'Shruti',
    // Chinese names
    'Wei', 'Xiao', 'Ming', 'Jing', 'Chen', 'Lin', 'Hui', 'Yan', 'Fang', 'Mei',
    'Tao', 'Ling', 'Jian', 'Xiu', 'Hong', 'Yun', 'Feng', 'Lan', 'Ning', 'Qiang',
    // Southeast Asian names
    'Phuong', 'Thanh', 'Minh', 'Linh', 'Nguyen', 'Tran', 'Somchai', 'Niran', 'Budi', 'Dewi',
    'Rizal', 'Siti', 'Ahmad', 'Fatimah', 'Aziz', 'Nur', 'Hafiz', 'Aisha', 'Malik', 'Zara',
    // Middle Eastern names
    'Omar', 'Fatima', 'Hassan', 'Mariam', 'Khalid', 'Sara', 'Youssef', 'Layla', 'Tariq', 'Amina',
    'Rashid', 'Hana', 'Bilal', 'Noura', 'Kareem', 'Dalia', 'Samir', 'Rania', 'Faisal', 'Yasmin',
    // African names
    'Kwame', 'Ama', 'Kofi', 'Adaeze', 'Chidi', 'Ngozi', 'Emeka', 'Chiamaka', 'Tunde', 'Folake',
    'Sekou', 'Aminata', 'Moussa', 'Fatou', 'Ibrahim', 'Mariama', 'Oumar', 'Aissatou', 'Bakary', 'Kadiatou'
];

const lastNames = [
    // Indian surnames
    'Sharma', 'Patel', 'Kumar', 'Singh', 'Reddy', 'Rao', 'Nair', 'Menon', 'Iyer', 'Gupta',
    'Verma', 'Joshi', 'Mishra', 'Das', 'Pillai', 'Shetty', 'Naidu', 'Choudhury', 'Bose', 'Sen',
    // Chinese surnames
    'Wang', 'Li', 'Zhang', 'Liu', 'Chen', 'Yang', 'Huang', 'Zhao', 'Wu', 'Zhou',
    // Southeast Asian surnames
    'Nguyen', 'Tran', 'Le', 'Pham', 'Bui', 'Tan', 'Lim', 'Ong', 'Goh', 'Chua',
    // Middle Eastern surnames
    'Al-Rashid', 'Hassan', 'Ahmed', 'Ali', 'Mohammad', 'Ibrahim', 'Khalil', 'Mahmoud', 'Saleh', 'Nasser',
    // African surnames
    'Okonkwo', 'Mensah', 'Diallo', 'Traore', 'Ndiaye', 'Kamara', 'Toure', 'Ceesay', 'Jalloh', 'Conteh'
];

// Failure reasons (50+ comprehensive reasons)
const failureReasons = [
    'exceeded daily loss limit',
    'breached maximum drawdown',
    'held positions over weekend',
    'traded during restricted news hours',
    'exceeded position size limit',
    'failed to meet profit target',
    'account went into negative',
    'violated consistency rule',
    'placed trades without stop loss',
    'exceeded maximum lot size',
    'traded restricted instruments',
    'missed trading days requirement',
    'held trades overnight without permission',
    'exceeded risk per trade limit',
    'account inactive for too long',
    'failed profit consistency check',
    'breached equity threshold',
    'too many losing trades in a row',
    'over-leveraged positions',
    'traded outside allowed hours',
    'failed to close trades before deadline',
    'martingale strategy detected',
    'grid trading violation',
    'copy trading detected',
    'high frequency trading flagged',
    'insufficient trading volume',
    'hedging rule violation',
    'exceeded open positions limit',
    'trailing drawdown breached',
    'minimum trading days not met',
    'profit target not reached in time',
    'violated 2% risk rule',
    'emotional trading patterns detected',
    'revenge trading behavior flagged',
    'overlapping positions detected',
    'single trade exceeded risk limit',
    'gold trading restriction violated',
    'crypto trading restriction violated',
    'indices trading limit exceeded',
    'forex pairs restriction violated',
    'scalping rule violation',
    'holding period too short',
    'spread manipulation detected',
    'slippage abuse flagged',
    'account sharing suspected',
    'multiple accounts detected',
    'VPN usage violation',
    'news trading restriction',
    'EA trading not allowed',
    'signal copying detected',
    'maximum trades per day exceeded',
    'profit locking violation',
    'straddle trading detected',
    'bracket order violation',
    'average down strategy flagged',
    'pyramiding rule violation',
    'correlation trading violation',
    'swap farming detected'
];

const accountSizes = [5000, 10000, 15000, 25000, 50000, 100000, 200000];
const challengeTypes = ['Evolution Challenge', 'Express Challenge', 'Instant Funding', '2-Step Challenge', '1-Step Challenge'];
const phases = ['Phase 1', 'Phase 2'];

const generateRandomName = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName.charAt(0)}.`;
};

const generateRandomAmount = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Event types - equal distribution after buying
const eventTypes = ['buy', 'fail', 'pass', 'funded', 'payout'];

const generateRandomNotification = () => {
    // Weighted distribution
    const rand = Math.random() * 100;
    let eventType;

    if (rand < 50) eventType = 'buy';        // 50%
    else if (rand < 85) eventType = 'fail';   // 35% (50 + 35)
    else if (rand < 95) eventType = 'pass';   // 10% (85 + 10)
    else if (rand < 98) eventType = 'funded'; // 3% (95 + 3)
    else eventType = 'payout';               // 2% (98 + 2)

    const name = generateRandomName();
    const size = getRandomItem(accountSizes);
    const challenge = getRandomItem(challengeTypes);

    switch (eventType) {
        case 'buy':
            return `${name} purchased $${size.toLocaleString()} ${challenge}`;
        case 'fail':
            const phase = getRandomItem(phases);
            const reason = getRandomItem(failureReasons);
            return `${name} failed ${phase} ($${size.toLocaleString()} ${challenge}) - ${reason}`;
        case 'pass':
            return `${name} passed ${getRandomItem(phases)} on $${size.toLocaleString()} account`;
        case 'funded':
            return `${name} is now funded with $${size.toLocaleString()}`;
        case 'payout':
            const amount = generateRandomAmount(150, 8500);
            return `${name} received $${amount.toLocaleString()} payout`;
        default:
            return `${name} purchased $${size.toLocaleString()} ${challenge}`;
    }
};

// Random wait time: 5s, 10s, 30s, 1min, 2min (max 2 min)
const waitTimes = [5000, 10000, 30000, 60000, 120000];
const getRandomWaitTime = () => getRandomItem(waitTimes);

function LiveTicker() {
    const [notification, setNotification] = useState(generateRandomNotification());
    const [isScrolling, setIsScrolling] = useState(true);
    const [showEmpty, setShowEmpty] = useState(false);

    useEffect(() => {
        let timeoutId;

        const cycle = () => {
            setNotification(generateRandomNotification());
            setIsScrolling(true);
            setShowEmpty(false);

            // After 90 seconds (scroll duration), text is gone
            timeoutId = setTimeout(() => {
                setIsScrolling(false);
                setShowEmpty(true);

                // After random wait (5s, 10s, 30s, 1min, 2min), start new event
                const waitTime = getRandomWaitTime();
                timeoutId = setTimeout(() => {
                    cycle();
                }, waitTime);
            }, 90000);
        };

        cycle();
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="w-full bg-gray-100 dark:bg-[#161616] rounded-lg mb-6 border border-gray-200 dark:border-[#222] overflow-hidden">
            <div className="py-2.5 px-4 h-8 flex items-center justify-center relative">
                {showEmpty ? (
                    <span className="text-xs text-gray-400 dark:text-gray-600">no new events</span>
                ) : (
                    <div
                        className="absolute whitespace-nowrap"
                        style={{
                            animation: isScrolling ? 'slideLeft 90s linear forwards' : 'none',
                        }}
                    >
                        <span className="text-xs text-gray-500 dark:text-gray-500">
                            {notification}
                        </span>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes slideLeft {
                    0% {
                        transform: translateX(calc(50vw + 50%));
                    }
                    100% {
                        transform: translateX(calc(-50vw - 100%));
                    }
                }
            `}</style>
        </div>
    );
}

export default LiveTicker;
