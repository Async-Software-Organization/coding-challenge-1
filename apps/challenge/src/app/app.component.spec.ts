import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { RouterTestingModule } from "@angular/router/testing";
import { MaterialModule } from "./shared";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule, MaterialModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should have app name", () => {
    expect(component.title).toBe("challenge");
  });
});
