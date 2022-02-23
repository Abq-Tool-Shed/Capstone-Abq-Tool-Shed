export interface Tool {
    toolId: string|null;
    toolCategoryId: string;
    toolProfileId: string;
    toolDescription: string;
    toolImage: string|null;
    toolLat: number|null;
    toolLendRules: string;
    toolLong: number|null;
    toolName: string;
    toolPostDate: Date|null;

}
