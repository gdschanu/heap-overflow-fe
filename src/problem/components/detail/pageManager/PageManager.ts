export default class PageManager {
  private perPage : number;
  private total : number;
  private currentPage : number;
  private moveToPageHandler: any;

  constructor(
    perPage : number,
    total: number,
    moveToPageHandler: any
  ) {
    if (perPage == 0) {
      throw new Error('perPage must be greater than 0')
    }
    if (total < 0) {
      throw new Error('perPage must be greater than or equal 0')
    }
    this.perPage = perPage;
    this.total = total;
    this.currentPage = 1;
    this.moveToPageHandler = moveToPageHandler;
  }

  public getCurrentPage() : number {
    return this.currentPage;
  }

  private totalPages() : number {
    if (this.total == 0) return 1;
    return Math.ceil(this.total / this.perPage);
  }

  private lastPage() : number {
    return this.totalPages();
  }

  public canRenderMiddlePages() : boolean {
    return this.totalPages() > 2;
  }

  public getMiddlePages() : number[] {
    let pivot = this.currentPage;
    if (this.currentPage == 1) pivot = 2;
    else if (this.currentPage >= this.lastPage() - 2) pivot = this.lastPage() - 2;
    const pages : number[] = [];
    for (var i=pivot-1; i<=pivot+2; i++) {
      if (1<i && i<this.lastPage()) {
        pages.push(i);
      }
    }
    return pages;
  }

  public canRenderLeftEllipsis() : boolean {
    const middlePages : number[] = this.getMiddlePages();
    return middlePages.length > 0 && middlePages[0] > 2;
  }

  public canRenderRightEllipsis() : boolean {
    const middlePages : number[] = this.getMiddlePages(); 
    return middlePages.length > 0 && middlePages[middlePages.length - 1] < this.lastPage() - 1;
  }

  public canRenderRightPage() : boolean {
    return this.lastPage() != 1;
  }

  public getRightPage() : number {
    return this.lastPage();
   }

  public moveToNextPage() : void {
    this.moveToPage(this.currentPage + 1);
  }

  public moveToPreviousPage() : void {
    this.moveToPage(this.currentPage - 1);
  }

  public moveToPage(page : number) : void {
    if (1 <= page && page <= this.lastPage()) {
      this.currentPage = page;
      this.moveToPageHandler(page);
    }
  }
}