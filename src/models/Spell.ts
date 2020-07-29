export interface Spell {
  index: string,
  name: string,
  desc: string[],
  higher_level?: string[],
  range: string,
  components: string[],
  material?: string,
  ritual: boolean,
  duration: string,
  concentration: boolean,
  casting_time: string,
  level: number,
  school: {
    name: string,
    url: string
  },
  classes:
    {
      name: string,
      url: string
    }[],
  subclasses:
    {
      name: string,
      url: string
    }[],
  url: string
}

export default Spell;
