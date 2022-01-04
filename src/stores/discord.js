import { writable } from "svelte/store";
import random from 'canvas-sketch-util/random.js';
import { LoremIpsum } from 'lorem-ipsum';
import { generateSlug } from "random-word-slugs";
import faker from 'faker'


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


const pageTitle = writable([])


export const pageTitleStore = {
    subscribe: pageTitle.subscribe,
    set: val => {
        pageTitle.set(val);
        localStorage.setItem("pageTitle", JSON.stringify(val));
    }
};

function discord() {
    const { subscribe, set, update } = writable(0)
    return {
        subscribe,
        load: (data) => loadDummyData(data),
        readServers: (data) => readData(data),
        readChannels: (data) => readData(data),
        loadMessages: (serverId, channelGroupId, channelId) => loadMessages(serverId, channelGroupId, channelId),
        generateServers: (num) => generateServers(num),
        generateChannels: (serverId) => generateChannels(serverId),
        generateMessages: (serverId, channelId) => generateMessages(serverId, channelId),
        clearData: () => {
            servers.set({})
        },
        update: (data) => updateDiscordStores(data)
    }
}

function updateDiscordStores(data) {
    saveData("discordDummyData", data)
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
        let id = makeid(2);
        let serverName = generateSlug(2, {
            format: 'title',
            partsOfSpeech: ["adjective", "noun"],
            categories: {
                adjective: ["color", "appearance"],
                noun: ["people", "animals"]
            }
        })
        s.push({ id: `${id}`, name: serverName, channels: [] });
    });
    s = [...new Set(s)]
    s = [{ id: "home", name: "My Discord", channels: [] }, ...s]
    saveData("discordDummyData", s)
    return s;
}

function generateChannels(serverId) {
    let c = [];
    [...Array(5)].map(() => {
        let id = makeid(4);
        let channelGroupName = generateSlug(2, {
            format: 'title',
            partsOfSpeech: ["noun", "noun"],
            categories: {
                // adjective: ["color", "appearance"],
                noun: ["profession", "technology" | "thing"]
            }
        })
        // console.log(`🚀 ~ file: discord.js ~ line 111 ~ [...Array ~ channelGroupName`, channelGroupName)
        let channelSubGroup = [];
        [...Array(5)].map((_, i) => {
            let channelName = generateSlug(2, {
                format: 'title',
                partsOfSpeech: ["adjective", "noun"],
                categories: {
                    adjective: ["color", "appearance"],
                    noun: ["things", "animals"]
                }
            })
            let incidenceRate = 5
            let icon = 'line-md:hash-small'
            let channelIcons = ['line-md:hash-small', 'heroicons-solid:chat-alt']
            let randomStateDecider = Math.floor(Math.random() * incidenceRate)
            let channelRead = true
            if (randomStateDecider == 0) {
                let random = Math.floor(Math.random() * channelIcons.length)
                icon = channelIcons[random]
                // console.log(`🚀 ~ file: discord.js ~ line 129 ~ [...Array ~ icon`, icon)
            }
            if (randomStateDecider == 0 || randomStateDecider == 2 || randomStateDecider == 4) {
                channelRead = false
            }
            // console.log(`🚀 ~ file: discord.js ~ line 124 ~ [...Array ~ randomStateDecider`, randomStateDecider)
            // console.log(`🚀 ~ file: discord.js ~ line 103 ~ [...Array ~ channelName`, channelName)
            channelSubGroup.push({
                id: `${serverId}-${id}-${i}`,
                subGroupId: `${serverId}-${id}`,
                serverId: `${serverId}`,
                open: true,
                icon: icon,
                read: channelRead,
                name: channelName,
                messages: []
            })
        });
        c.push({ serverId: `${serverId}`, id: `${serverId}-${id}`, name: channelGroupName, open: true, channels: channelSubGroup });
    });
    // c = [...new Set(c)]
    let data = readData("discordDummyData")
    if (serverId) {
        let index = data.findIndex(s => s.id === serverId)
        data[index].channels = c
        saveData("discordDummyData", data)
    }
    return c;
}
async function generateMessages(serverId, channelId) {
    console.log(`🚀 ~ file: discord.js ~ line 141 ~ generateMessages ~ serverId, channelId`, serverId, channelId)
    channelId < 0 ? channelId = 0 : channelId
    // console.log(`🚀 ~ file: discord.js ~ line 108 ~ generateMessages ~ channelIndex`, channelIndex)
    // console.log(`🚀 ~ file: discord.js ~ line 108 ~ generateMessages ~ serverIndex`, serverIndex)
    let m = [];
    [...Array(30)].map(() => {
        let message = lorem.generateSentences(Math.floor(random.range(1, 8)));
        m.push(message);
    });
    let data = readData("discordDummyData")
    if (serverId) {
        let serverIndex = data.findIndex(s => s.id === serverId)
        // console.log(`🚀 ~ file: discord.js ~ line 153 ~ generateMessages ~ serverIndex`, serverIndex)
        let channels = data[serverIndex].channels
        // console.log(`🚀 ~ file: discord.js ~ line 155 ~ generateMessages ~ channels`, channels)
        let channelIndex = channels.findIndex(c => c.id === channelId)
        // console.log(`🚀 ~ file: discord.js ~ line 157 ~ generateMessages ~ channelIndex`, channelIndex)
        let subChannelGroup = data[serverIndex].channels[channelIndex]
        console.log(`🚀 ~ file: discord.js ~ line 159 ~ generateMessages ~ subChannelGroup`, subChannelGroup)
        subChannelGroup['channels'].forEach(subChannel => {
            let m = [];
            [...Array(30)].map(() => {
                let message = lorem.generateSentences(Math.floor(random.range(1, 8)));
                let messageObj = {
                    username: "username",
                    avatar: "avatar",
                    message: message
                }
                m = [...m, messageObj]
            });
            subChannel.messages = m

        })
        let date = new Date()
        let messages = []
        subChannelGroup['channels'].forEach(subChannel => {
            messages = []
            subChannel['messages'].forEach((messageObj) => {
                let avatar =  `http://placeimg.com/120/120/nature?random=${Math.random() * 10000}`
                // let avatar = `${faker.image.nature()}?random=${Math.random() * 10000}`
                let username = faker.name.firstName() + faker.name.lastName()
                messageObj['username'] = username
                messageObj['avatar'] = avatar
                messageObj['datePosted'] = faker.date.recent(parseInt(random.range(0, 30)), date)
                messages = [...messages, messageObj]
            })
        })

        // data[serverIndex].channels[channelIndex].messages = m
        saveData("discordDummyData", data)
        // console.log(`🚀 ~ file: discord.js ~ line 190 ~ generateMessages ~ m`, m)
        // return messages;
    }
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
    if (localStorageSupported) {
        try {
            const prev = window.localStorage.getItem(key);
            // console.log(`🚀 ~ file: discord.js ~ line 157 ~ readData ~ prev`, prev)
            if (!prev) return false;
            const newData = JSON.parse(prev);
            // console.log(`🚀 ~ file: discord.js ~ line 160 ~ readData ~ newData`, newData)
            // Object.assign(data, newData);
            return newData
        } catch (err) {
            console.warn(err);
        }
    }
}

function loadMessages(serverId, channelGroupId, channelId) {
    console.log(`🚀 ~ file: discord.js ~ line 240 ~ loadMessages ~ serverId, channelGroupId, channelId`, serverId, channelGroupId, channelId)
    let data = loadDummyData()
    // console.log(`🚀 ~ file: discord.js ~ line 241 ~ loadMessages ~ data`, data)
    let serverIndex = data.findIndex((s) => s.id === serverId)
    console.log(`🚀 ~ file: discord.js ~ line 244 ~ loadMessages ~ serverIndex`, serverIndex)
    let server = data[serverIndex]
    console.log(`🚀 ~ file: discord.js ~ line 246 ~ loadMessages ~ server `, server )
    let channelGroupIndex = server.channels.findIndex(g => g.id === channelGroupId)
    console.log(`🚀 ~ file: discord.js ~ line 248 ~ loadMessages ~ channelGroupIndex`, channelGroupIndex)
    let channelGroup = server[channelGroupIndex]
    console.log(`🚀 ~ file: discord.js ~ line 250 ~ loadMessages ~ channelGroup`, channelGroup)
}


function loadDummyData(key = "discordDummyData") {
    if (localStorageSupported) {
        try {
            const prev = window.localStorage.getItem(key);
            // console.log(`🚀 ~ file: discord.js ~ line 157 ~ readData ~ prev`, prev)
            if (!prev) return false;
            const newData = JSON.parse(prev);
            // console.log(`🚀 ~ file: discord.js ~ line 160 ~ readData ~ newData`, newData)
            // Object.assign(data, newData);
            return newData
        } catch (err) {
            console.warn(err);
        }
    }
}

export const D = discord()