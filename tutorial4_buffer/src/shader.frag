#version 450

layout(location=0) in vec3 v_color;
layout(location=0) out vec3 f_color;

void main() {
  f_color = vec4(v_color, 1.0);
}
