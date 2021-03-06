// matrix class: define 3x3 matrix
class Matrix{
  constructor(a00 = 0, a01 = 0, a02 = 0,
              a10 = 0, a11 = 0, a12 = 0,
              a20 = 0, a21 = 0, a22 = 0)
  {
    // raw, column
    this._a00 = a00;
    this._a01 = a01;
    this._a02 = a02;

    this._a10 = a10;
    this._a11 = a11;
    this._a12 = a12;

    this._a20 = a20;
    this._a21 = a21;
    this._a22 = a22;
  }

  set a00(a00){this._a00 = a00;}
  set a01(a01){this._a01 = a01;}
  set a02(a02){this._a02 = a02;}
  set a10(a10){this._a10 = a10;}
  set a11(a11){this._a11 = a11;}
  set a12(a12){this._a12 = a12;}
  set a20(a20){this._a20 = a20;}
  set a21(a21){this._a21 = a21;}
  set a22(a22){this._a22 = a22;}

  get a00(){return this._a00;}
  get a01(){return this._a01;}
  get a02(){return this._a02;}
  get a10(){return this._a10;}
  get a11(){return this._a11;}
  get a12(){return this._a12;}
  get a20(){return this._a20;}
  get a21(){return this._a21;}
  get a22(){return this._a22;}

  add(rhs)
  {
    return new Matrix(
      this._a00 + rhs.a00, this._a01 + rhs.a01, this._a02 + rhs.a02,
      this._a10 + rhs.a10, this._a11 + rhs.a11, this._a12 + rhs.a12,
      this._a20 + rhs.a20, this._a21 + rhs.a21, this._a22 + rhs.a22
    );
  }

  sub(rhs)
  {
    return new Matrix(
      this._a00 - rhs.a00, this._a01 - rhs.a01, this._a02 - rhs.a02,
      this._a10 - rhs.a10, this._a11 - rhs.a11, this._a12 - rhs.a12,
      this._a20 - rhs.a20, this._a21 - rhs.a21, this._a22 - rhs.a22
    );
  }

  // matrix * matrix
  mul(rhs)
  {
    return new Matrix(
      this._a00 * rhs.a00 + this._a01 * rhs.a10 + this._a02 * rhs.a20 ,
      this._a00 * rhs.a01 + this._a01 * rhs.a11 + this._a02 * rhs.a21 ,
      this._a00 * rhs.a02 + this._a01 * rhs.a12 + this._a02 * rhs.a22 ,

      this._a10 * rhs.a00 + this._a11 * rhs.a10 + this._a12 * rhs.a20 ,
      this._a10 * rhs.a01 + this._a11 * rhs.a11 + this._a12 * rhs.a21 ,
      this._a10 * rhs.a02 + this._a11 * rhs.a12 + this._a12 * rhs.a22 ,

      this._a20 * rhs.a00 + this._a21 * rhs.a10 + this._a22 * rhs.a20 ,
      this._a20 * rhs.a01 + this._a21 * rhs.a11 + this._a22 * rhs.a21 ,
      this._a20 * rhs.a02 + this._a21 * rhs.a12 + this._a22 * rhs.a22
    );
  }

  //matrix * vector2d
  multiple_vec(vec, z = 0)
  {
    return new Vector(
      this._a00 * vec.x + this._a01 * vec.y + this._a02 * z,
      this._a10 * vec.x + this._a11 * vec.y + this._a12 * z);
      // this._a20 * vec.x + this._a21 * vec.y + this.a_22 * z //vector is 2d vector
  }
}

// angle[rad]
function CreateRotationMatrix(angle)
{
  var c = Math.cos(angle);
  var s = Math.sin(angle);
  return new Matrix( c,-s, 0,
                     s, c, 0,
                     0, 0, 1);
}
