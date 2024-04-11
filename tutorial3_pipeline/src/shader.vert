#version 450

const vec2 positions[3] = vec2[3]{
  vec2(0.0, 0.5),
  vec2(-0.5, -0.5),
  vec2(0.5, -0.5)
};

void main(){
  gl_Position = vec4(positions[gl_VerticalIndex], 0.0, 0.1);
}
