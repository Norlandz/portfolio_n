export class ProjectInfo {
  public readonly name: string;
  public readonly arr_urlStr: string[] = [];
  public readonly arr_imgInfo: ImgInfo[] = [];
  public readonly arr_pathStr_vid: string[] = [];
  public readonly flexGrow = 1;
  public readonly seqAddedDate;
  public readonly lvOfComplexity;
  public readonly lvFeatured;

  constructor(name: string, arr_urlStr: string[], arr_pathStr_img: ImgInfo[], arr_pathStr_vid: string[], seqAddedDate: number, lvOfComplexity: number, lvFeatured = 0) {
    this.name = name;
    this.arr_urlStr = [...arr_urlStr];
    this.arr_imgInfo = [...arr_pathStr_img];
    this.arr_pathStr_vid = [...arr_pathStr_vid];
    this.seqAddedDate = seqAddedDate;
    this.lvOfComplexity = lvOfComplexity;
    this.lvFeatured = lvFeatured;
  }
}

export class ImgInfo {
  constructor(
    //
    public readonly pathStr: string,
    public readonly ncol: number = 1,
    public readonly nrow: number = 1,
    public readonly alt?: string
  ) {}
}
