import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elmentRef: ElementRef) {
    }

    ngOnInit() {
        this.elmentRef.nativeElement.style.backgroundColor = 'green';
    }
}