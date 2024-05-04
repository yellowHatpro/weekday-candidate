export type Job = {
	jdUid?: string | null;
	jdLink?: string | null;
	jobDetailsFromCompany?: string | null;
	maxJdSalary?: number | null;
	minJdSalary?: number | null;
	salaryCurrencyCode?: string | null;
	location?: string | null;
	minExp?: number | null;
	maxExp?: number | null;
	jobRole?: string | null;
	companyName?: string | null;
	logoUrl?: string | null;
}

export type RoleFilter = string
export type ExpFilter = string
export type RemoteLocationFilter = string
export type PayFilter = string

export type Filter = RoleFilter | ExpFilter | RemoteLocationFilter | PayFilter
