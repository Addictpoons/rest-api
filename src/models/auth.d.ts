import { User } from "@prisma/client";

// tipagens globais
declare global {
    namespace Express {
        export interface Request {
            user: User | null;
        }
    }
}