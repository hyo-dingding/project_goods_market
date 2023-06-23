import { BoardList } from 'src/apis/boardLists/entities/boarList.entity';
import { User } from 'src/apis/users/entities/user.entity';
export declare class Board {
    id: string;
    title: string;
    contents: string;
    createdAt: Date;
    updatedAt: Date;
    isSecret: boolean;
    user: User;
    boarlist: BoardList;
}
