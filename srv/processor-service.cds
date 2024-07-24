using { db } from '../db/schema';

service ProcessorService {
    entity Students as projection on db.Students;
}

annotate ProcessorService.Students with @odata.draft.enabled;
