function rad2deg(angle){
  return angle * 180 / Math.PI;
}

function deg2rad(angle){
  return angle * Math.PI / 180;
}


var rot= [
  [deg2rad(0), deg2rad(0), deg2rad(0), deg2rad(180), deg2rad(180)],
  [deg2rad(0), deg2rad(0), deg2rad(0), deg2rad(0), deg2rad(0)],
  [deg2rad(0), deg2rad(-60), deg2rad(60), deg2rad(0), deg2rad(0)],
  [0.44, 1.37, 5.74, 0.44, 1.37],
];



var presets = [
  //Haurentziu's Triangle
    [
      {
        a: 0.33,
        b: 0,
        c: 0,
        d: 0.33,
        tx: 0,
        ty: 0,
        weight: 0.2,
      },

      {
        a: 0.33,
        b: 0,
        c: 0,
        d: 0.33,
        tx: 0.33,
        ty: 0.57,
        weight: 0.2,
      },

      {
        a: 0.33,
        b: 0,
        c: 0,
        d: 0.33,
        tx: 0.66,
        ty: 0,
        weight: 0.2,
      },

      {
        a: -0.33,
        b: 0,
        c: 0,
        d: -0.33,
        tx: 0.66,
        ty: 0.28,
        weight: 0.2,
      },

      {
      a: -0.33,
      b: 0,
      c: 0,
      d: -0.33,
      tx: 0.66,
      ty: 0.57,
      weight: 0.2,
    }
  ],

  //Sierpinski's Triangle 
  [
    {
      a: 0.5,
      b: 0,
      c: 0,
      d: 0.5,
      tx: 0,
      ty: 0,
      weight: 0.2,
    },

    {
      a: 0.5,
      b: 0,
      c: 0,
      d: 0.5,
      tx: 0.5,
      ty: 0,
      weight: 0.2,
    },

    {
      a: 0.5,
      b: 0,
      c: 0,
      d: 0.5,
      tx: 0.25,
      ty: 0.5,
      weight: 0.2,
    },

    {
      a: 0.5,
      b: 0,
      c: 0,
      d: 0.5,
      tx: 0.5,
      ty: 0,
      weight: 0.2,
    },

    {
    a: 0.5,
      b: 0,
      c: 0,
      d: 0.5,
    tx: 0.25,
    ty: 0.5,
    weight: 0.2,
    }
  ],

  //Koch Curve
  [
    {
      a: 0.33,
      b: 0,
      c: 0,
      d: 0.33,
      tx: 0,
      ty: 0,
      weight: 0.2,
    },

    {
      a: 0.165,
      b: -0.28,
      c: 0.28,
      d: 0.165,
      tx: 0.33,
      ty: 0,
      weight: 0.2,
    },

    {
      a: 0.165,
      b: 0.28,
      c: -0.28,
      d: 0.165,
      tx: 0.5,
      ty: 0.288,
      weight: 0.2,
    },

    {
      a: 0.33,
      b: 0,
      c: 0,
      d: 0.33,
      tx: 0.66,
      ty: 0,
      weight: 0.2,
    },

    {
      a: 0.33,
      b: 0,
      c: 0,
      d: 0.33,
      tx: 0.66,
      ty: 0,
      weight: 0.2,
    }
  ],

  //Tree
  [
    {
      a: 0.01,
      b: 0,
      c: 0,
      d: 0.45,
      tx: 0,
      ty: 0,
      weight: 0.15,
    },

    {
      a: -0.01,
      b: 0,
      c: 0,
      d: -0.45,
      tx: 0,
      ty: 0.4,
      weight: 0.05,
    },

    {
      a: 0.42,
      b: -0.42,
      c: 0.42,
      d: 0.42,
      tx: 0,
      ty: 0.42,
      weight: 0.4,
    },

    {
      a: 0.42,
      b: 0.42,
      c: -0.42,
      d: 0.42,
      tx: 0,
      ty: 0.4,
      weight: 0.4,
    },

    {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      tx: 0.5,
      ty: 0,
      weight: 0,
    }
  ],

  //Barnsley fern
  [
    {
      a: 0,
      b: 0,
      c: 0,
      d: 0.16,
      tx: 0,
      ty: 0,
      weight: 0.01,
    },

    {
      a: 0.85,
      b: 0.04,
      c: -0.04,
      d: 0.85,
      tx: 0,
      ty: 1.6,
      weight: 0.85,
    },

    {
      a: 0.2,
      b: -0.26,
      c: 0.23,
      d: 0.22,
      tx: 0,
      ty: 1.6,
      weight: 0.07,
    },

    {
      a: -0.15,
      b: 0.28,
      c: 0.26,
      d: 0.24,
      tx: 0,
      ty: 0.44,
      weight: 0.7,
    },

    {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      tx: 0.5,
      ty: 0,
      weight: 0,
    }
  ],

];