import {List} from "immutable";
import Coordinate from 'ol/coordinate';
import {fromLonLat} from 'ol/proj';
import {PlannerCommandAddLeg} from "./commands/planner-command-add-leg";
import {PlannerCommandAddStartPoint} from "./commands/planner-command-add-start-point";
import {Plan} from "./plan/plan";
import {PlanLeg} from "./plan/plan-leg";
import {PlanLegFragment} from "./plan/plan-leg-fragment";
import {PlanNode} from "./plan/plan-node";
import {PlannerContext} from "./planner-context";

export class TestRouteData {

  // example-1-a-32-08.gpx
  private abLatLons = List([
    [51.4822082, 4.4614283],
    [51.4820128, 4.4614065],
    [51.4819317, 4.4613848],
    [51.4819317, 4.4613848],
    [51.4817146, 4.4612744],
    [51.4807315, 4.4609198],
    [51.4798085, 4.4606482],
    [51.4789497, 4.4604536],
    [51.4781, 4.4602667],
    [51.4777525, 4.4602145],
    [51.47353, 4.4603322],
    [51.4734227, 4.4603548],
    [51.4733162, 4.460401],
    [51.4732288, 4.460461],
    [51.4731388, 4.4605351],
    [51.4730577, 4.4606145],
    [51.4729927, 4.4606932],
    [51.472919, 4.4607957],
    [51.472919, 4.4607957],
    [51.4723208, 4.4601915],
    [51.4722408, 4.4601315],
    [51.4721508, 4.4601015],
    [51.4718508, 4.4601315],
    [51.4704687, 4.4605926],
    [51.4704687, 4.4605926],
    [51.4703939, 4.4606051],
    [51.4703939, 4.4606051],
    [51.4698145, 4.457452],
    [51.4697581, 4.4570142],
    [51.4695711, 4.4546011],
    [51.4695189, 4.4539856],
    [51.4695189, 4.4539856],
    [51.4693656, 4.4521131],
    [51.469136, 4.4492756],
    [51.469136, 4.4492756],
    [51.4691201, 4.4490454],
    [51.4691143, 4.4489628],
    [51.4691106, 4.4489087],
    [51.4691049, 4.4488279],
    [51.4691012, 4.4487734],
    [51.4690916, 4.4486372],
    [51.4689467, 4.4470508],
  ]);

  // example-1-b-08-93.gpx
  private bcLatLons = List([
    [51.4689467, 4.4470508],
    [51.4684953, 4.4472845],
    [51.4678483, 4.4476107],
    [51.4673938, 4.4477995],
    [51.4671627, 4.4478877],
    [51.4668912, 4.4479711],
    [51.4660357, 4.4481428],
    [51.4654315, 4.4482715],
    [51.4652396, 4.4483004],
    [51.4650732, 4.4483059],
    [51.4646924, 4.4482513],
    [51.4643406, 4.44822],
    [51.4640967, 4.4481941],
    [51.4640178, 4.4482043],
    [51.4639211, 4.4482289],
    [51.4636793, 4.4483147],
    [51.4633305, 4.4484352],
    [51.4631562, 4.4484822],
    [51.4630518, 4.448474],
    [51.4628571, 4.4484372],
    [51.4626936, 4.448426],
  ]);

  // example-1-c-93-92.gpx
  private cdLatLons = List([
    [51.4626936, 4.448426],
    [51.4625707, 4.4484003],
    [51.4624584, 4.4484003],
    [51.4622391, 4.4484432],
    [51.4611981, 4.4487138],
    [51.4603345, 4.4489359],
    [51.4602784, 4.4489681],
    [51.4602579, 4.4489886],
    [51.4602196, 4.449027],
    [51.4602196, 4.449027],
    [51.4603034, 4.4492338],
    [51.4603034, 4.4492338],
    [51.460265, 4.4493805],
    [51.4603926, 4.4497858],
    [51.4604331, 4.4499383],
    [51.4607149, 4.4516638],
    [51.4607149, 4.4516638],
    [51.4606628, 4.4517076],
    [51.4604337, 4.4517878],
    [51.4604382, 4.4518249],
    [51.4604382, 4.4518249],
    [51.4604626, 4.4520266],
    [51.4604626, 4.4520266],
    [51.4604669, 4.4520622],
    [51.4604675, 4.452067],
    [51.4607225, 4.451976],
    [51.4607329, 4.4520871],
    [51.4607329, 4.4520871],
    [51.4598888, 4.4523677],
    [51.4567909, 4.453408],
    [51.4553341, 4.4539277],
    [51.4553341, 4.4539277],
    [51.4557806, 4.457054],
    [51.4557933, 4.4572224],
    [51.4557933, 4.4572224],
    [51.4567859, 4.4580214],
    [51.456868, 4.4581758],
    [51.4582771, 4.4620683],
    [51.4587199, 4.4639828],
    [51.4587199, 4.4639828],
    [51.4585316, 4.4640886],
    [51.457874, 4.4641762],
    [51.4570478, 4.4643059],
    [51.4567614, 4.4643584],
    [51.4564712, 4.4644209],
    [51.4563116, 4.4644633],
    [51.45616, 4.4645119],
    [51.455518, 4.4647719],
  ]);

  // example-1-d-92-11.gpx
  private deLatLons = List([
    [51.455518, 4.4647719],
    [51.4556958, 4.4652865],
    [51.4558898, 4.4658019],
    [51.4559684, 4.4659989],
    [51.4560571, 4.4661761],
    [51.4561508, 4.4663023],
    [51.456203, 4.4663699],
    [51.4562526, 4.4664506],
    [51.4562857, 4.4665693],
    [51.4563131, 4.4667642],
    [51.4563437, 4.4671142],
    [51.4563389, 4.4677351],
    [51.4563488, 4.4678835],
    [51.4563717, 4.4679995],
    [51.4563996, 4.4681004],
    [51.4564638, 4.4682439],
    [51.4569756, 4.4693417],
    [51.457015, 4.4693585],
    [51.4570637, 4.4693439],
    [51.4574727, 4.4690871],
    [51.4575387, 4.4690743],
    [51.4576006, 4.4690958],
    [51.4576902, 4.4691569],
    [51.4577505, 4.4692026],
    [51.4578015, 4.4692175],
    [51.4578519, 4.4692065],
    [51.4580835, 4.4690361],
    [51.4581551, 4.4690117],
    [51.4582307, 4.46902],
    [51.4583108, 4.469045],
    [51.4583983, 4.4690922],
    [51.4586172, 4.4692241],
    [51.4588302, 4.4693981],
    [51.4588302, 4.4693981],
    [51.4589, 4.4694497],
    [51.4589747, 4.4694782],
    [51.4590288, 4.4694873],
    [51.4590867, 4.4694728],
    [51.4592095, 4.4694173],
    [51.4598236, 4.4690119],
    [51.4601515, 4.4688428],
    [51.4607387, 4.4685792],
    [51.4610877, 4.4683837],
    [51.4619287, 4.4678064],
    [51.4619287, 4.4678064],
    [51.4630913, 4.4689966],
    [51.4630913, 4.4689966],
    [51.463278, 4.4691829],
    [51.4640256, 4.4699288],
    [51.4641076, 4.4700359],
    [51.4641838, 4.4701604],
    [51.4642985, 4.4703484],
    [51.4644178, 4.4705737],
    [51.4646602, 4.4711349],
    [51.4649578, 4.4719014],
    [51.4649578, 4.4719014],
    [51.4648657, 4.4719981],
    [51.4647657, 4.4720844],
    [51.4647657, 4.4720844],
    [51.4648676, 4.4724678],
    [51.4649399, 4.4727396],
    [51.4649536, 4.4727743],
    [51.4649812, 4.4727817],
    [51.4650141, 4.4727682],
    [51.4650428, 4.4728104],
    [51.4650971, 4.4730525],
    [51.4651863, 4.4734404],
    [51.4651863, 4.4734404],
    [51.4652384, 4.4736947],
    [51.4652384, 4.4736947],
    [51.4652899, 4.4736794],
    [51.4656831, 4.4736739],
    [51.4659731, 4.4736835],
    [51.4662812, 4.4737273],
    [51.466324, 4.4737033],
    [51.4663498, 4.4736967],
    [51.4663747, 4.4737146],
    [51.4664093, 4.4737498],
    [51.4671497, 4.4739145],
    [51.4672749, 4.4739826],
    [51.4681908, 4.4747977],
    [51.4684465, 4.474994],
    [51.4685504, 4.4750488],
    [51.4687014, 4.4751204],
    [51.4687014, 4.4751204],
    [51.4687211, 4.475127],
    [51.4691426, 4.4753313],
    [51.4694231, 4.4754173],
    [51.4696797, 4.4754867],
    [51.4701885, 4.4755368],
    [51.4707625, 4.4756139],
    [51.4708897, 4.475633],
    [51.4709737, 4.4756513],
    [51.4710833, 4.4757069],
    [51.4711666, 4.4758179],
    [51.4712412, 4.4759639],
    [51.4714982, 4.4765117],
    [51.471595, 4.4767062],
    [51.4716095, 4.4767819],
    [51.471611, 4.4768789],
    [51.4715998, 4.4770974],
    [51.4715998, 4.4770974],
    [51.4715912, 4.4773369],
    [51.4715838, 4.4774102],
    [51.4715838, 4.4774102],
    [51.4716624, 4.4775582],
    [51.4716624, 4.4775582],
    [51.4716851, 4.4776567],
    [51.4716926, 4.4776892],
    [51.4717365, 4.4777353],
    [51.4720037, 4.4777087],
    [51.4722229, 4.477668],
    [51.4727346, 4.4775397],
    [51.4731796, 4.4773629],
    [51.4732672, 4.4773643],
    [51.4732672, 4.4773643],
    [51.473359, 4.4774339],
    [51.4740196, 4.4786091],
    [51.4740893, 4.478792],
    [51.4742296, 4.4794185],
    [51.4745458, 4.4809294],
    [51.4746427, 4.4813785],
    [51.4746427, 4.4813785],
    [51.4746767, 4.4815272],
    [51.4746767, 4.4815272],
    [51.4746948, 4.4816486],
    [51.4747422, 4.4823899],
    [51.4747847, 4.4830477],
    [51.4748213, 4.4835459],
  ]);

  // example-1-e-11-91.gpx
  private efLatLons = List([
    [51.4748213, 4.4835459],
    [51.474086, 4.4837628],
    [51.4737586, 4.4838647],
    [51.4733075, 4.4838861],
    [51.4728029, 4.483854],
    [51.4724287, 4.4837681],
    [51.4718907, 4.4835911],
    [51.4712959, 4.4833819],
    [51.470915, 4.4831888],
    [51.4706644, 4.4830278],
    [51.4703269, 4.4828186],
    [51.470202, 4.4827435],
  ]);

  // example-1-f-91-34.gpx
  private fgLatLons = List([
    [51.470202, 4.4827435],
    [51.4701665, 4.4827221],
    [51.4699325, 4.4824968],
    [51.4695903, 4.4821326],
    [51.4691239, 4.4816438],
    [51.4688269, 4.4813368],
    [51.4682819, 4.4807587],
    [51.4676904, 4.4804529],
    [51.4672226, 4.4803725],
    [51.4671056, 4.4803617],
    [51.4666946, 4.480528],
    [51.4660653, 4.4807579],
    [51.4660653, 4.4807579],
    [51.4660351, 4.4799583],
    [51.4660351, 4.4799583],
    [51.4655373, 4.4800012],
    [51.4653344, 4.4802813],
    [51.4652843, 4.4803295],
    [51.4638763, 4.4813692],
    [51.4635454, 4.4814872],
    [51.4631253, 4.4813541],
    [51.4628613, 4.4814239],
    [51.4624993, 4.4816481],
    [51.4622921, 4.4816481],
    [51.4619255, 4.4813166],
    [51.461627, 4.480999],
    [51.4614365, 4.4809722],
    [51.4610097, 4.4811825],
    [51.460398, 4.4814829],
    [51.4603636, 4.4815033],
    [51.4603636, 4.4815033],
    [51.4603779, 4.4815688],
    [51.4607183, 4.4833315],
    [51.4607183, 4.4833315],
    [51.4606338, 4.4833786],
    [51.4596435, 4.4839407],
    [51.4589689, 4.4844366],
    [51.4589097, 4.4844884],
    [51.4587167, 4.484766],
    [51.4585746, 4.4849565],
    [51.4584092, 4.4851469],
    [51.4582954, 4.4852521],
    [51.4582334, 4.4852886],
    [51.4581263, 4.4853209],
    [51.4579869, 4.4853455],
    [51.4578009, 4.4853239],
    [51.4570044, 4.4852128],
    [51.4562026, 4.4852219],
    [51.4562026, 4.4852219],
    [51.4560494, 4.4870942],
    [51.4558588, 4.4894474],
    [51.4558228, 4.4895592],
    [51.4557853, 4.4896118],
    [51.4557322, 4.4896319],
    [51.4556223, 4.4896418],
    [51.455197, 4.4896745],
    [51.4551447, 4.4897046],
    [51.4551159, 4.4897486],
    [51.4550898, 4.4898309],
    [51.45508, 4.4899373],
    [51.4549162, 4.4922548],
    [51.4548794, 4.4923191],
    [51.4547691, 4.4923728],
    [51.4545151, 4.4922762],
    [51.4530743, 4.4919114],
    [51.4524094, 4.491807],
    [51.4520086, 4.4917143],
  ]);

  // example-1-g-34-35.gpx
  private ghLatLons = List([
    [51.4520086, 4.4917143],
    [51.4512198, 4.4914647],
    [51.4510755, 4.4912434],
    [51.4510755, 4.4912434],
    [51.4509856, 4.49142],
    [51.4508518, 4.4916114],
    [51.4508018, 4.4916756],
    [51.4508018, 4.4916756],
    [51.4507558, 4.4915988],
    [51.4507558, 4.4915988],
    [51.4506708, 4.4914622],
    [51.4503363, 4.4915105],
    [51.4485829, 4.4917292],
    [51.4485829, 4.4917292],
    [51.4484986, 4.4905779],
    [51.4484634, 4.4900192],
    [51.448437, 4.4894871],
    [51.4484972, 4.4883567],
    [51.4486538, 4.4839935],
  ]);

  private abCoordinates: List<Coordinate> = this.toCoordinates(this.abLatLons);
  private bcCoordinates: List<Coordinate> = this.toCoordinates(this.bcLatLons);
  private cdCoordinates: List<Coordinate> = this.toCoordinates(this.cdLatLons);
  private deCoordinates: List<Coordinate> = this.toCoordinates(this.deLatLons);
  private efCoordinates: List<Coordinate> = this.toCoordinates(this.efLatLons);
  private fgCoordinates: List<Coordinate> = this.toCoordinates(this.fgLatLons);
  private ghCoordinates: List<Coordinate> = this.toCoordinates(this.ghLatLons);

  public examplePlan(): Plan {

    const a = new PlanNode("1001", "32", this.abCoordinates.get(0));
    const b = new PlanNode("1002", "08", this.bcCoordinates.get(0));
    const c = new PlanNode("1003", "93", this.cdCoordinates.get(0));
    const d = new PlanNode("1004", "92", this.deCoordinates.get(0));
    const e = new PlanNode("1005", "11", this.efCoordinates.get(0));
    const f = new PlanNode("1006", "91", this.fgCoordinates.get(0));
    const g = new PlanNode("1007", "34", this.ghCoordinates.get(0));
    const h = new PlanNode("1008", "35", this.ghCoordinates.get(this.ghCoordinates.size - 1));

    const ab = new PlanLegFragment(b, 1000, this.abCoordinates);
    const bc = new PlanLegFragment(c, 1200, this.bcCoordinates);
    const cd = new PlanLegFragment(d, 300, this.cdCoordinates);
    const de = new PlanLegFragment(e, 950, this.deCoordinates);
    const ef = new PlanLegFragment(f, 200, this.efCoordinates);
    const fg = new PlanLegFragment(g, 1230, this.fgCoordinates);
    const gh = new PlanLegFragment(h, 102, this.ghCoordinates);

    const ad = new PlanLeg("x", a, d, List([ab, bc, cd]));
    const df = new PlanLeg("y", d, f, List([de, ef]));
    const fh = new PlanLeg("z", f, h, List([fg, gh]));

    return new Plan(a, List([ad, df, fh]));
  }

  buildTestPlan(context: PlannerContext) {

    const plan = this.examplePlan();

    plan.legs.forEach(leg => {
      context.legCache.add(leg);
    });

    const command = new PlannerCommandAddStartPoint(plan.source);
    context.execute(command);

    plan.legs.forEach(leg => {
      // simulate users clicking nodes in the map
      const command = new PlannerCommandAddLeg(leg);
      context.execute(command);
    });

  }

  private toCoordinates(list: List<Array<number>>): List<Coordinate> {
    return list.map(xx => fromLonLat([xx[1], xx[0]]));
  }

}
