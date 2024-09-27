import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  icons: (any)[] = [];
  iconsName: (string)[] = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Scrum', 'Firebase', 'GIT', 'CSS', 'REST-Api', 'Material Design'];
  clicked:boolean = false;


  constructor() {
    this.generateArray();
  }

  async generateArray() {
    await this.createNumbers();

    for (let k = 0; k < 10; k++) {
      this.icons[k].name = this.iconsName[k];
    }

  }

  createNumbers() {
    for (let i = 1; i < 11; i++) {
      this.icons.push({
        image_name: i,
        name: ''
      });
    }
  }

  show_growthMindset_note() {
    if (this.clicked == false) {
      document.getElementById('growth_mindset_note')?.classList.add('display-unset');
      this.clicked = true;
    } else if (this.clicked == true) {
      document.getElementById('growth_mindset_note')?.classList.remove('display-unset');
      this.clicked = false;
    }
  }

}