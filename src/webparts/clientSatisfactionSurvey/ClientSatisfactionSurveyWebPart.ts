import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import type { IReadonlyTheme } from '@microsoft/sp-component-base';
// import { escape } from '@microsoft/sp-lodash-subset';

// import styles from './ClientSatisfactionSurveyWebPart.module.scss';
import * as strings from 'ClientSatisfactionSurveyWebPartStrings';
import './Survey.css'

export interface IClientSatisfactionSurveyWebPartProps {
  description: string;
}

export default class ClientSatisfactionSurveyWebPart extends BaseClientSideWebPart<IClientSatisfactionSurveyWebPartProps> {

  // private _isDarkTheme: boolean = false;
  // private _environmentMessage: string = '';

  public render(): void {

    this.domElement.innerHTML = `
      <div class='loader'>
        <div class='loader_inner'>
          <div class='div'>Loading feedback formx...</div>
        </div>
      </div>
      <div class='tut'>
        <div class='tut_inner'>
          <h2>Drag the characters mouths to reflect your satisfaction</h2>
          <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/Dec_31,_2015_22:28.gif'>
          <p>Ok</p>
        </div>
      </div>
      <div class='question'>
        <p>?</p>
      </div>
      <div class='feedbackform'>
        <div class='feedbackform_slide first active_slide'>
          <img class='sb monkey' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/sunburst.svg'>
          <div class='grad monkey'></div>
          <div class='feedbackform_slide__inner'>
            <h1 class='question_s'></h1>
            <h2>Drag the cheeky monkeys mouth up or down to reflect your satisfaction!</h2>
            <div class='character'>
              <div class='character_image'>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/monkey.svg'>
              </div>
              <div class='character_smile'>
                <div class='smiler_input'>
                  <input class='monkey' max='20' min='0' type='range'>
                  <svg class='smile monkey' height='20px' version='1.1' width='70px' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M10 10 C 20 10, 40 10, 50 10' fill='transparent' stroke-linecap='round' stroke-width='4' stroke='#562911'></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class='rating monkey'>
              <span>Average</span>
              <img class='next' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/greenbutton3.png'>
            </div>
          </div>
        </div>
        <div class='feedbackform_slide'>
          <img class='sb rabbit' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/circback.svg'>
          <div class='grad rabbit'></div>
          <div class='feedbackform_slide__inner'>
            <h1 class='question_s'></h1>
            <h2>Drag the fluffy rabbits mouth up or down to reflect your satisfaction!</h2>
            <div class='character rabbit'>
              <div class='character_image'>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/rabbit.svg'>
              </div>
              <div class='character_smile'>
                <div class='smiler_input'>
                  <input class='rabbit' max='20' min='0' type='range'>
                  <svg class='smile rabbit' height='20px' version='1.1' width='70px' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M10 10 C 20 10, 40 10, 50 10' fill='transparent' stroke-linecap='round' stroke-width='4' stroke='#562911'></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class='rating rabbit'>
              <span>Average</span>
              <img class='next' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/greenbutton3.png'>
              <img class='prev' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/greenbutton4.png'>
            </div>
          </div>
        </div>
        <div class='feedbackform_slide'>
          <img class='sb panda' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/hexback.svg'>
          <div class='grad panda'></div>
          <div class='feedbackform_slide__inner'>
            <h1 class='question_s'></h1>
            <h2>Drag the shy pandas mouth up or down to reflect your satisfaction!</h2>
            <div class='character'>
              <div class='character_image'>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/panda.svg'>
              </div>
              <div class='character_smile'>
                <div class='smiler_input'>
                  <input class='panda' max='20' min='0' type='range'>
                  <svg class='smile panda' height='20px' version='1.1' width='70px' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M10 10 C 20 10, 40 10, 50 10' fill='transparent' stroke-linecap='round' stroke-width='4' stroke='black'></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class='rating panda'>
              <span>Average</span>
              <img class='next' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/greenbutton3.png'>
              <img class='prev' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/greenbutton4.png'>
            </div>
          </div>
        </div>
        <div class='feedbackform_slide'>
          <img class='sb lion' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/sunburst.svg'>
          <div class='grad lion'></div>
          <div class='feedbackform_slide__inner'>
            <h1 class='question_s'></h1>
            <h2>Drag the lions mouth up or down to reflect your satisfaction!</h2>
            <div class='character'>
              <div class='character_image'>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lion.svg'>
              </div>
              <div class='character_smile'>
                <div class='smiler_input'>
                  <input class='lion' max='20' min='0' type='range'>
                  <svg class='smile lion' height='20px' version='1.1' width='70px' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M10 10 C 20 10, 40 10, 50 10' fill='transparent' stroke-linecap='round' stroke-width='4' stroke='black'></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class='rating lion'>
              <span>Average</span>
              <img class='next' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/greenbutton3.png'>
              <img class='prev' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/greenbutton4.png'>
            </div>
          </div>
        </div>
        <div class='feedbackform_slide'>
          <div class='feedbackform_slide__inner'>
            <div class='col_left'>
              <img class='board' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/resultboard.png'>
              <div class='summary'></div>
            </div>
            <div class='col_right'>
              <div class='rating end'>
                <span>Thankyou!</span>
                <img class='prev' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/greenbutton4.png'>
                <a href='https://codepen.io/jcoulterdesign/' target='_blank'>Follow me on Codepen for more cool stuff!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    require('./Survey.js');
    
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      // this._environmentMessage = message;
    });
  }



  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
            case 'TeamsModern':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    // this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
