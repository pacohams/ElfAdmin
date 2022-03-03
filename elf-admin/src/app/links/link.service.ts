import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { protectedResources } from '../auth-config';

@Injectable({
    providedIn: 'root'
})
export class LinkService {
    url = protectedResources.linkApi.endpoint;

    constructor(private http: HttpClient) { }

    list(take: number, offset: number, term: string) {
        return this.http.get<Link[]>(this.url + `/list?take=${take}&offset=${offset}` + (term ? `&term=${term}` : ''))
    }
}

export interface Link {
    akaName: string;
    fwToken: string;
    id: number;
    isEnabled: boolean;
    note: string;
    originUrl: string;
    tenantId: string;
    ttl: number;
    updateTimeUtc: Date;
}