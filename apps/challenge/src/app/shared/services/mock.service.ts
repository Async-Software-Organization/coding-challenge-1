import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataMockService {
  public get timeSeriesMockData(): Observable<any[]> {
    return of([
      {
        t: 1646960001000,
        v: 10.9
      },
      {
        t: 1646961803000,
        v: 10.9
      },
      {
        t: 1646963600000,
        v: 10.8
      },
      {
        t: 1646965399000,
        v: 10.8
      },
      {
        t: 1646967200000,
        v: 10.7
      },
      {
        t: 1646968999000,
        v: 10.7
      },
      {
        t: 1646970799000,
        v: 10.6
      },
      {
        t: 1646972601000,
        v: 10.6
      },
      {
        t: 1646974399000,
        v: 10.6
      },
      {
        t: 1646976199000,
        v: 10.6
      },
      {
        t: 1646978001000,
        v: 10.5
      },
      {
        t: 1646979800000,
        v: 10.5
      },
      {
        t: 1646981601000,
        v: 10.5
      },
      {
        t: 1646983401000,
        v: 10.6
      },
      {
        t: 1646985222000,
        v: 10.8
      },
      {
        t: 1646987000000,
        v: 10.9
      },
      {
        t: 1646988800000,
        v: 11
      },
      {
        t: 1646990604000,
        v: 11.1
      },
      {
        t: 1646992420000,
        v: 11.2
      },
      {
        t: 1646994199000,
        v: 11.3
      },
      {
        t: 1646996001000,
        v: 11.4
      },
      {
        t: 1646997820000,
        v: 11.5
      },
      {
        t: 1646999599000,
        v: 11.6
      },
      {
        t: 1647001415000,
        v: 11.6
      },
      {
        t: 1647003200000,
        v: 11.6
      },
      {
        t: 1647004999000,
        v: 11.6
      },
      {
        t: 1647006815000,
        v: 10.4
      },
      {
        t: 1647008583000,
        v: 6.1
      },
      {
        t: 1647010405000,
        v: 7.9
      },
      {
        t: 1647012205000,
        v: 8.9
      },
      {
        t: 1647013999000,
        v: 9.5
      },
      {
        t: 1647015798000,
        v: 9.8
      },
      {
        t: 1647017598000,
        v: 9.9
      },
      {
        t: 1647019431000,
        v: 10
      },
      {
        t: 1647021199000,
        v: 10
      },
      {
        t: 1647022999000,
        v: 10
      },
      {
        t: 1647024799000,
        v: 10
      },
      {
        t: 1647026601000,
        v: 10
      },
      {
        t: 1647028398000,
        v: 10
      },
      {
        t: 1647030231000,
        v: 9.9
      },
      {
        t: 1647032004000,
        v: 10
      },
      {
        t: 1647033805000,
        v: 10.1
      },
      {
        t: 1647035591000,
        v: 10.3
      },
      {
        t: 1647037406000,
        v: 10.4
      },
      {
        t: 1647039192000,
        v: 10.6
      },
      {
        t: 1647040994000,
        v: 10.6
      },
      {
        t: 1647042794000,
        v: 10.7
      },
      {
        t: 1647044612000,
        v: 10.8
      },
      {
        t: 1647046393000,
        v: 11
      },
      {
        t: 1647048192000,
        v: 11.1
      },
      {
        t: 1647049992000,
        v: 11.2
      },
      {
        t: 1647051792000,
        v: 11.3
      },
      {
        t: 1647053592000,
        v: 11.4
      },
      {
        t: 1647055391000,
        v: 11.5
      },
      {
        t: 1647057193000,
        v: 11.6
      },
      {
        t: 1647059004000,
        v: 11.8
      },
      {
        t: 1647060804000,
        v: 11.9
      },
      {
        t: 1647062604000,
        v: 12
      },
      {
        t: 1647064415000,
        v: 12.1
      },
      {
        t: 1647066192000,
        v: 12.2
      },
      {
        t: 1647068004000,
        v: 12.3
      },
      {
        t: 1647069803000,
        v: 12.4
      },
      {
        t: 1647071594000,
        v: 12.7
      },
      {
        t: 1647073393000,
        v: 12.8
      },
      {
        t: 1647075193000,
        v: 12.7
      },
      {
        t: 1647076994000,
        v: 12.8
      },
      {
        t: 1647078793000,
        v: 12.8
      },
      {
        t: 1647080593000,
        v: 12.9
      },
      {
        t: 1647082392000,
        v: 13
      },
      {
        t: 1647084193000,
        v: 13.1
      },
      {
        t: 1647085993000,
        v: 13.2
      },
      {
        t: 1647087793000,
        v: 13.3
      },
      {
        t: 1647089593000,
        v: 13.3
      },
      {
        t: 1647091393000,
        v: 13.4
      },
      {
        t: 1647093193000,
        v: 13.5
      },
      {
        t: 1647094993000,
        v: 13.6
      },
      {
        t: 1647096793000,
        v: 13.7
      },
      {
        t: 1647098592000,
        v: 13.8
      },
      {
        t: 1647100393000,
        v: 13.9
      },
      {
        t: 1647102193000,
        v: 14
      },
      {
        t: 1647103993000,
        v: 14.1
      },
      {
        t: 1647105793000,
        v: 14.2
      },
      {
        t: 1647107595000,
        v: 14.4
      },
      {
        t: 1647109395000,
        v: 14.5
      },
      {
        t: 1647111195000,
        v: 14.6
      },
      {
        t: 1647112996000,
        v: 14.6
      },
      {
        t: 1647114796000,
        v: 14.7
      },
      {
        t: 1647116593000,
        v: 14.7
      },
      {
        t: 1647118393000,
        v: 14.7
      },
      {
        t: 1647119689000,
        v: null
      },
      {
        t: 1647119729000,
        v: 14.8
      },
      {
        t: 1647121531000,
        v: 14.9
      },
      {
        t: 1647123331000,
        v: 15
      },
      {
        t: 1647125131000,
        v: 15
      },
      {
        t: 1647126932000,
        v: 15.1
      },
      {
        t: 1647128731000,
        v: 15.1
      },
      {
        t: 1647130531000,
        v: 15.2
      },
      {
        t: 1647132332000,
        v: 15.3
      },
      {
        t: 1647134132000,
        v: 15.3
      },
      {
        t: 1647135931000,
        v: 15.3
      },
      {
        t: 1647137732000,
        v: 15.4
      },
      {
        t: 1647139532000,
        v: 15.5
      },
      {
        t: 1647141331000,
        v: 15.5
      },
      {
        t: 1647142228000,
        v: 15.5
      },
      {
        t: 1647143967000,
        v: 15.7
      },
      {
        t: 1647145767000,
        v: 15.7
      },
      {
        t: 1647147593000,
        v: 15.8
      },
      {
        t: 1647149367000,
        v: 15.9
      },
      {
        t: 1647151168000,
        v: 15.9
      },
      {
        t: 1647152967000,
        v: 15.9
      },
      {
        t: 1647154768000,
        v: 15.9
      },
      {
        t: 1647156568000,
        v: 15.9
      },
      {
        t: 1647158367000,
        v: 15.9
      },
      {
        t: 1647160166000,
        v: 15.8
      },
      {
        t: 1647160227000,
        v: 15.8
      },
      {
        t: 1647162041000,
        v: 15.7
      },
      {
        t: 1647163844000,
        v: 15.5
      },
      {
        t: 1647165645000,
        v: 15.2
      },
      {
        t: 1647167444000,
        v: 15
      },
      {
        t: 1647168291000,
        v: null
      },
      {
        t: 1647168291000,
        v: 14.9
      },
      {
        t: 1647169246000,
        v: 14.8
      },
      {
        t: 1647171041000,
        v: 14.7
      },
      {
        t: 1647171041000,
        v: 14.7
      },
      {
        t: 1647171041000,
        v: 14.7
      },
      {
        t: 1647172841000,
        v: 14.6
      },
      {
        t: 1647172841000,
        v: 14.6
      },
      {
        t: 1647172841000,
        v: 14.6
      },
      {
        t: 1647174643000,
        v: 14.5
      },
      {
        t: 1647174643000,
        v: 14.5
      },
      {
        t: 1647174643000,
        v: 14.5
      },
      {
        t: 1647176466000,
        v: 14.3
      },
      {
        t: 1647176466000,
        v: 14.3
      },
      {
        t: 1647176466000,
        v: 14.3
      },
      {
        t: 1647178246000,
        v: 14.1
      },
      {
        t: 1647178246000,
        v: 14.1
      },
      {
        t: 1647178246000,
        v: 14.1
      },
      {
        t: 1647180035000,
        v: 14
      },
      {
        t: 1647180035000,
        v: null
      },
      {
        t: 1647180035000,
        v: 14
      },
      {
        t: 1647181846000,
        v: 13.8
      },
      {
        t: 1647181846000,
        v: 13.8
      },
      {
        t: 1647183635000,
        v: 13.7
      },
      {
        t: 1647183635000,
        v: 13.7
      },
      {
        t: 1647185445000,
        v: 13.5
      },
      {
        t: 1647185445000,
        v: 13.5
      },
      {
        t: 1647187231000,
        v: 13.4
      },
      {
        t: 1647187231000,
        v: 13.4
      },
      {
        t: 1647189045000,
        v: 13.2
      },
      {
        t: 1647189045000,
        v: 13.2
      },
      {
        t: 1647190834000,
        v: 13.1
      },
      {
        t: 1647190834000,
        v: 13.1
      },
      {
        t: 1647192634000,
        v: 12.9
      },
      {
        t: 1647192634000,
        v: 12.9
      },
      {
        t: 1647194435000,
        v: 12.9
      },
      {
        t: 1647194435000,
        v: 12.9
      },
      {
        t: 1647196235000,
        v: 12.7
      },
      {
        t: 1647196235000,
        v: 12.7
      },
      {
        t: 1647198035000,
        v: 12.6
      },
      {
        t: 1647198035000,
        v: 12.6
      },
      {
        t: 1647199835000,
        v: 12.5
      },
      {
        t: 1647199835000,
        v: 12.5
      },
      {
        t: 1647201635000,
        v: 12.4
      },
      {
        t: 1647201635000,
        v: 12.4
      },
      {
        t: 1647203446000,
        v: 12.2
      },
      {
        t: 1647203446000,
        v: 12.2
      },
      {
        t: 1647205231000,
        v: 12.2
      },
      {
        t: 1647207032000,
        v: 12.1
      },
      {
        t: 1647208832000,
        v: 11.9
      },
      {
        t: 1647210632000,
        v: 11.8
      },
      {
        t: 1647212432000,
        v: 11.9
      },
      {
        t: 1647214231000,
        v: 11.8
      },
      {
        t: 1647216032000,
        v: 11.7
      },
      {
        t: 1647217831000,
        v: 11.6
      },
      {
        t: 1647219632000,
        v: 11.6
      },
      {
        t: 1647221432000,
        v: 11.5
      },
      {
        t: 1647223231000,
        v: 11.4
      },
      {
        t: 1647225031000,
        v: 11.5
      },
      {
        t: 1647226832000,
        v: 11.5
      },
      {
        t: 1647228632000,
        v: 11.5
      },
      {
        t: 1647230430000,
        v: 11.7
      },
      {
        t: 1647232231000,
        v: 11.7
      },
      {
        t: 1647234030000,
        v: 11.8
      },
      {
        t: 1647235832000,
        v: 11.8
      },
      {
        t: 1647237632000,
        v: 11.8
      },
      {
        t: 1647239432000,
        v: 11.8
      },
      {
        t: 1647241232000,
        v: 11.6
      },
      {
        t: 1647243032000,
        v: 11.5
      },
      {
        t: 1647244832000,
        v: 11.5
      },
      {
        t: 1647246632000,
        v: 11.5
      },
      {
        t: 1647248431000,
        v: 11.6
      },
      {
        t: 1647250231000,
        v: 11.6
      },
      {
        t: 1647252032000,
        v: 11.8
      },
      {
        t: 1647253832000,
        v: 11.8
      },
      {
        t: 1647255598000,
        v: 12.1
      },
      {
        t: 1647257432000,
        v: 13
      },
      {
        t: 1647259231000,
        v: 15.1
      },
      {
        t: 1647260209000,
        v: null
      },
      {
        t: 1647260209000,
        v: 16
      },
      {
        t: 1647261032000,
        v: 20.2
      },
      {
        t: 1647261034000,
        v: null
      },
      {
        t: 1647261034000,
        v: 20.3
      },
      {
        t: 1647262832000,
        v: 22.1
      },
      {
        t: 1647264632000,
        v: 23.2
      },
      {
        t: 1647266432000,
        v: 23.9
      },
      {
        t: 1647268232000,
        v: 24.3
      },
      {
        t: 1647270032000,
        v: 24.7
      },
      {
        t: 1647271832000,
        v: 24.8
      },
      {
        t: 1647273632000,
        v: 24.7
      },
      {
        t: 1647275431000,
        v: 24.6
      },
      {
        t: 1647277232000,
        v: 24.6
      },
      {
        t: 1647279032000,
        v: 24.6
      },
      {
        t: 1647280832000,
        v: 24.4
      },
      {
        t: 1647282631000,
        v: 24.4
      },
      {
        t: 1647284432000,
        v: 24.3
      },
      {
        t: 1647286230000,
        v: 24.3
      },
      {
        t: 1647288032000,
        v: 24.2
      },
      {
        t: 1647289831000,
        v: 24.2
      },
      {
        t: 1647291631000,
        v: 24.2
      },
      {
        t: 1647293432000,
        v: 24.2
      },
      {
        t: 1647295232000,
        v: 24.2
      },
      {
        t: 1647297031000,
        v: 24.2
      },
      {
        t: 1647298831000,
        v: 24.2
      },
      {
        t: 1647300631000,
        v: 24.2
      },
      {
        t: 1647302432000,
        v: 24.2
      },
      {
        t: 1647304232000,
        v: 24.2
      },
      {
        t: 1647306032000,
        v: 24.2
      },
      {
        t: 1647307830000,
        v: 24.1
      },
      {
        t: 1647309632000,
        v: 24.1
      },
      {
        t: 1647311432000,
        v: 24.2
      },
      {
        t: 1647313231000,
        v: 24.2
      },
      {
        t: 1647315031000,
        v: 24.1
      },
      {
        t: 1647316832000,
        v: 24.1
      },
      {
        t: 1647318632000,
        v: 24.1
      },
      {
        t: 1647320432000,
        v: 24.4
      },
      {
        t: 1647322232000,
        v: 24.5
      },
      {
        t: 1647324032000,
        v: 24.6
      },
      {
        t: 1647325830000,
        v: 24.8
      },
      {
        t: 1647327632000,
        v: 25
      },
      {
        t: 1647329431000,
        v: 25.2
      },
      {
        t: 1647331232000,
        v: 25.3
      },
      {
        t: 1647333032000,
        v: 25.4
      },
      {
        t: 1647334832000,
        v: 25.4
      },
      {
        t: 1647336632000,
        v: 25.2
      },
      {
        t: 1647338432000,
        v: 25
      },
      {
        t: 1647340232000,
        v: 25.1
      },
      {
        t: 1647342032000,
        v: 25
      },
      {
        t: 1647343832000,
        v: 25
      },
      {
        t: 1647345632000,
        v: 25
      },
      {
        t: 1647347432000,
        v: 25
      },
      {
        t: 1647349232000,
        v: 25.1
      },
      {
        t: 1647351032000,
        v: 25.1
      },
      {
        t: 1647352832000,
        v: 25.1
      },
      {
        t: 1647354630000,
        v: 25.1
      },
      {
        t: 1647356432000,
        v: 25.1
      },
      {
        t: 1647358232000,
        v: 25
      },
      {
        t: 1647360032000,
        v: 24.7
      },
      {
        t: 1647361832000,
        v: 24.4
      },
      {
        t: 1647363632000,
        v: 24.4
      },
      {
        t: 1647365432000,
        v: 24.2
      },
      {
        t: 1647367231000,
        v: 24.1
      },
      {
        t: 1647369032000,
        v: 24
      },
      {
        t: 1647370832000,
        v: 23.9
      },
      {
        t: 1647372632000,
        v: 23.9
      },
      {
        t: 1647374431000,
        v: 23.8
      },
      {
        t: 1647376232000,
        v: 23.7
      },
      {
        t: 1647378032000,
        v: 23.7
      },
      {
        t: 1647379832000,
        v: 23.7
      },
      {
        t: 1647381632000,
        v: 23.6
      },
      {
        t: 1647383432000,
        v: 23.5
      },
      {
        t: 1647385232000,
        v: 23.5
      },
      {
        t: 1647387032000,
        v: 23.5
      },
      {
        t: 1647388831000,
        v: 23.5
      },
      {
        t: 1647390632000,
        v: 23.4
      },
      {
        t: 1647392432000,
        v: 23.4
      },
      {
        t: 1647394232000,
        v: 23.4
      },
      {
        t: 1647396032000,
        v: 23.4
      },
      {
        t: 1647397832000,
        v: 23.4
      },
      {
        t: 1647399632000,
        v: 23.3
      },
      {
        t: 1647401432000,
        v: 23.3
      },
      {
        t: 1647403231000,
        v: 23.5
      },
      {
        t: 1647405032000,
        v: 23.7
      },
      {
        t: 1647406832000,
        v: 23.9
      },
      {
        t: 1647408631000,
        v: 24.1
      },
      {
        t: 1647410432000,
        v: 24.3
      },
      {
        t: 1647412232000,
        v: 24.5
      },
      {
        t: 1647414032000,
        v: 24.5
      },
      {
        t: 1647415832000,
        v: 24.5
      },
      {
        t: 1647417632000,
        v: 24.6
      },
      {
        t: 1647419432000,
        v: 24.6
      },
      {
        t: 1647421232000,
        v: 24.7
      },
      {
        t: 1647423032000,
        v: 24.6
      },
      {
        t: 1647424832000,
        v: 24.6
      },
      {
        t: 1647426631000,
        v: 24.6
      },
      {
        t: 1647428432000,
        v: 24.6
      },
      {
        t: 1647430232000,
        v: 24.8
      },
      {
        t: 1647432031000,
        v: 25.3
      },
      {
        t: 1647432609000,
        v: null
      },
      {
        t: 1647432609000,
        v: 25.4
      },
      {
        t: 1647433832000,
        v: 25.5
      },
      {
        t: 1647433858000,
        v: null
      },
      {
        t: 1647433858000,
        v: 25.5
      },
      {
        t: 1647435605000,
        v: 23.8
      },
      {
        t: 1647437405000,
        v: 22.3
      },
      {
        t: 1647439207000,
        v: 21.6
      },
      {
        t: 1647441006000,
        v: 21
      },
      {
        t: 1647442832000,
        v: 20.2
      },
      {
        t: 1647444611000,
        v: 19.7
      },
      {
        t: 1647446432000,
        v: 19.2
      },
      {
        t: 1647448153000,
        v: null
      },
      {
        t: 1647448153000,
        v: 19.1
      },
      {
        t: 1647448201000,
        v: 19.1
      },
      {
        t: 1647448338000,
        v: null
      },
      {
        t: 1647448338000,
        v: 19.2
      },
      {
        t: 1647450032000,
        v: 17.6
      },
      {
        t: 1647451804000,
        v: 16.5
      },
      {
        t: 1647453614000,
        v: 15.5
      },
      {
        t: 1647455092000,
        v: null
      },
      {
        t: 1647455092000,
        v: 14.9
      },
      {
        t: 1647455412000,
        v: 14.9
      },
      {
        t: 1647457232000,
        v: 14.4
      },
      {
        t: 1647459032000,
        v: 14.6
      },
      {
        t: 1647460832000,
        v: 14.7
      },
      {
        t: 1647462632000,
        v: 16.2
      },
      {
        t: 1647463948000,
        v: null
      },
      {
        t: 1647463948000,
        v: 16.6
      },
      {
        t: 1647463979000,
        v: null
      },
      {
        t: 1647463985000,
        v: null
      },
      {
        t: 1647464289000,
        v: 16.6
      },
      {
        t: 1647466089000,
        v: 17.6
      },
      {
        t: 1647467890000,
        v: 18.5
      },
      {
        t: 1647469690000,
        v: 18.9
      },
      {
        t: 1647471451000,
        v: 18.9
      },
      {
        t: 1647473250000,
        v: 18.5
      },
      {
        t: 1647474293000,
        v: 18.2
      },
      {
        t: 1647474338000,
        v: 18.2
      },
      {
        t: 1647475101000,
        v: 18.2
      },
      {
        t: 1647476906000,
        v: 18.1
      },
      {
        t: 1647478692000,
        v: 18
      },
      {
        t: 1647479027000,
        v: null
      },
      {
        t: 1647479027000,
        v: 17.9
      },
      {
        t: 1647479051000,
        v: null
      },
      {
        t: 1647479051000,
        v: 18
      },
      {
        t: 1647479144000,
        v: null
      },
      {
        t: 1647479144000,
        v: 18
      },
      {
        t: 1647479199000,
        v: null
      },
      {
        t: 1647479203000,
        v: null
      },
      {
        t: 1647479236000,
        v: null
      },
      {
        t: 1647479524000,
        v: null
      },
      {
        t: 1647479524000,
        v: 18.7
      },
      {
        t: 1647479545000,
        v: null
      },
      {
        t: 1647479545000,
        v: 19
      },
      {
        t: 1647479619000,
        v: null
      },
      {
        t: 1647479619000,
        v: 19.5
      },
      {
        t: 1647479768000,
        v: null
      },
      {
        t: 1647480070000,
        v: null
      },
      {
        t: 1647480070000,
        v: 19.7
      },
      {
        t: 1647480517000,
        v: 19.7
      },
      {
        t: 1647482314000,
        v: 19.5
      },
      {
        t: 1647484101000,
        v: 19.1
      },
      {
        t: 1647485901000,
        v: 18.6
      },
      {
        t: 1647487701000,
        v: 17.9
      },
      {
        t: 1647489502000,
        v: 17.2
      },
      {
        t: 1647491325000,
        v: 16.4
      },
      {
        t: 1647493102000,
        v: 15.7
      },
      {
        t: 1647494902000,
        v: 15
      },
      {
        t: 1647495147000,
        v: null
      },
      {
        t: 1647495147000,
        v: 14.9
      },
      {
        t: 1647496721000,
        v: 14.4
      },
      {
        t: 1647496721000,
        v: 14.4
      },
      {
        t: 1647498521000,
        v: 13.9
      },
      {
        t: 1647500161000,
        v: null
      },
      {
        t: 1647500161000,
        v: 13.5
      },
      {
        t: 1647500208000,
        v: null
      },
      {
        t: 1647500208000,
        v: 13.5
      },
      {
        t: 1647500230000,
        v: null
      },
      {
        t: 1647501312000,
        v: null
      },
      {
        t: 1647501312000,
        v: 13.9
      },
      {
        t: 1647502058000,
        v: 13.7
      },
      {
        t: 1647503862000,
        v: 12.8
      },
      {
        t: 1647505685000,
        v: 12.1
      },
      {
        t: 1647507489000,
        v: 11.6
      },
      {
        t: 1647509300000,
        v: 11.3
      },
      {
        t: 1647511104000,
        v: 11.1
      },
      {
        t: 1647512872000,
        v: null
      },
      {
        t: 1647512901000,
        v: 11.1
      }
    ]);
  }
}