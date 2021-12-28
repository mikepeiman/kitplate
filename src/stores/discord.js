import { writable } from "svelte/store";
import random from 'canvas-sketch-util/random.js';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        min: 1,
        max: 8
    },
    wordsPerSentence: {
        min: 4,
        max: 16
    }
});


const servers = writable({})
const channels = writable({})
// const discord = writable({})
const messages = writable([])
// const discordData = writable({})


export const serversStore = {
    subscribe: servers.subscribe,
    set: val => {
        servers.set(val);
        localStorage.setItem("servers", JSON.stringify(val));
    }
};

export const channelsStore = {
    subscribe: channels.subscribe,
    set: val => {
        channels.set(val);
        localStorage.setItem("channels", JSON.stringify(val));
    }
};

export const messagesStore = {
    subscribe: messages.subscribe,
    set: val => {
        messages.set(val);
        localStorage.setItem("messages", JSON.stringify(val));
    }
};

// export const discordStore = {
//     subscribe: discord.subscribe,
//     set: val => {
//         discord.set(val);
//         localStorage.setItem("discord", JSON.stringify(val));
//     }
// };

function discord() {
    const { subscribe, set, update } = writable(0)
    return {
        subscribe,
        readServers: (data) => readData(data),
        readChannels: (data) => readData(data),
        readMessages: (data) => readData(data),
        generateServers: (num) => generateServers(num),
        generateChannels: (serverId) => generateChannels(serverId),
        generateMessages: (serverId, channelId) => generateMessages(serverId, channelId),
        clearData: () => {
            servers.set({})
        }
    }
}

function getServerData(serverId) {
    const { subscribe, set, update } = writable(0)
    return {
        subscribe,
    }

}

function generateServers(num) {
    let s = [];
    [...Array(num)].map(() => {
        let id = makeid(4);
        s.push({id: `server-${id}`, channels: []});
    });
    s = [...new Set(s)]
    saveData("discordDummyData", s)
    return s;
}

function generateChannels(serverId) {
    let c = [];
    [...Array(40)].map(() => {
        let id = makeid(4);
        c.push({id: `channel-${id}`, messages: []});
    });
    c = [...new Set(c)]
    let data = readData("discordDummyData")
    if(serverId) {
        let index = data.findIndex(s => s.id === serverId)
        data[index].channels = c
        saveData("discordDummyData", data)
    }   
    return c;
}
function generateMessages(serverId, channelId) {
    let m = [];
    [...Array(40)].map(() => {
        let message = lorem.generateSentences(Math.floor(random.range(1, 8)));
        m.push(message);
    });
    let data = readData("discordDummyData")
    if(serverId) {
        let serverIndex = data.findIndex(s => s.id === serverId)
        console.log(`🚀 ~ file: discord.js ~ line 115 ~ generateMessages ~ serverIndex`, serverIndex)
        let channels = data[serverIndex].channels
        console.log(`🚀 ~ file: discord.js ~ line 117 ~ generateMessages ~ channels `, channels )
        let channelIndex = channels.findIndex(c => c.id === channelId)
        console.log(`🚀 ~ file: discord.js ~ line 119 ~ generateMessages ~ channelIndex`, channelIndex)
        console.log(`🚀 ~ file: discord.js ~ line 121 ~ generateMessages ~ data[serverIndex][channelIndex]`, data[serverIndex].channels[channelIndex])
        data[serverIndex].channels[channelIndex].messages = m
        saveData("discordDummyData", data)
    }   
    return m;
}


function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let localStorageSupported = (() => {
    try {
        return typeof window.localStorage !== 'undefined';
    } catch (err) {
        return false;
    }
})();


function saveData(key, data) {
    if (localStorageSupported) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }
}

function readData(key) {
    console.log(`🚀 ~ file: discord.js ~ line 134 ~ readData ~ key`, key)
    if (localStorageSupported) {
        try {
            const prev = window.localStorage.getItem(key);
            console.log(`🚀 ~ file: discord.js ~ line 141 ~ readData ~ prev`, prev)
            if (!prev) return;
            const newData = JSON.parse(prev);
            console.log(`🚀 ~ file: discord.js ~ line 144 ~ readData ~ newData`, newData)
            // Object.assign(data, newData);
            return newData
        } catch (err) {
            console.warn(err);
        }
    }
}

export const D = discord()