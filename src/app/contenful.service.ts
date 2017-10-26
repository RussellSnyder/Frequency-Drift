import {Injectable, OnInit} from '@angular/core';
import {createClient, Entry} from 'contentful';

const CONFIG = {
    space: '059warfkid38',
    accessToken: '5dd2a628c582a9cc4fe2c19d2380eb7db20da803e4a45a5b0f948459cbdc5eee',

    contentTypeIds: [
        'homePage',
        'socialMedia',
        'impressum',
        'press',
        'records'
    ]
}


@Injectable()
export class ContenfulService {
    content;

    private cdaClient = createClient({
        space: CONFIG.space,
        accessToken: CONFIG.accessToken
    });


    getParsedWebsiteContent(query?: object): Promise<Entry<any>[]> {
        // if content stored, return it;
        if (this.content) {
            return Promise.resolve(this.content);
        }
        return this.cdaClient.getEntries(Object.assign({
            content_types: CONFIG.contentTypeIds
        }, query))
            .then(res => this.content = this.parseData(res.items))
            .then(res => this.content);
    }

    parseData(arrayOfData) {
        let siteData = {};
        arrayOfData.forEach((item, index) => {
            let id = item.sys.contentType.sys.id;
            if (CONFIG.contentTypeIds.indexOf(id) === -1) {
                // stop if not using data type
                return
            }
            siteData[id] = item.fields
        })
        return siteData;
    }
}
