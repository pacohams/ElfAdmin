import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { protectedResources } from '../auth-config';

@Injectable({
    providedIn: 'root'
})
export class ReportService {
    url = protectedResources.reportApi.endpoint;

    constructor(private http: HttpClient) { }

    recentRequests() {
        return this.http.get<RequestTrack[]>(this.url + '/requests/recent');
    }

    mostRequestedLinksPastMonth() {
        return this.http.get<MostRequestedLinkCount[]>(this.url + '/requests/mostpastmonth');
    }

    clientTypePastMonth() {
        return this.http.get<ClientTypeCount[]>(this.url + '/requests/clienttypepastmonth');
    }
}

export interface ClientTypeCount {
    clientTypeName: string;
    count: number;
}
export interface MostRequestedLinkCount {
    fwToken: string;
    note: string;
    requestCount: number;
}
export interface RequestTrack {
    fwToken: string;
    note: string;
    userAgent: string;
    ipAddress: string;
    requestTimeUtc: string;
}