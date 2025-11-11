declare module 'ogl' {
  export class Renderer {
    constructor(options?: {
      canvas?: HTMLCanvasElement
      width?: number
      height?: number
      dpr?: number
      alpha?: boolean
      depth?: boolean
      stencil?: boolean
      antialias?: boolean
      premultipliedAlpha?: boolean
      preserveDrawingBuffer?: boolean
      powerPreference?: string
      autoClear?: boolean
    })
    gl: WebGLRenderingContext | WebGL2RenderingContext
    canvas: HTMLCanvasElement
    dpr: number
    width: number
    height: number
    setSize(width: number, height: number): void
    render(scene: any): void
  }

  export class Program {
    constructor(
      gl: WebGLRenderingContext | WebGL2RenderingContext,
      options: {
        vertex: string
        fragment: string
        uniforms?: Record<string, any>
      }
    )
    uniforms: Record<string, any>
  }

  export class Mesh {
    constructor(
      gl: WebGLRenderingContext | WebGL2RenderingContext,
      options?: {
        geometry?: any
        program?: Program
        mode?: number
        frustumCulled?: boolean
        renderOrder?: number
      }
    )
    geometry: any
    program: Program
    position: { x: number; y: number; z: number }
    rotation: { x: number; y: number; z: number }
    scale: { x: number; y: number; z: number }
    matrix: any
    worldMatrix: any
    parent: Mesh | null
    children: Mesh[]
    add(child: Mesh): void
    remove(child: Mesh): void
    updateMatrix(): void
    draw(options?: { camera?: any }): void
  }

  export class Color {
    constructor(r?: number, g?: number, b?: number, a?: number)
    r: number
    g: number
    b: number
    a: number
    set(r: number, g: number, b: number, a?: number): void
  }

  export class Triangle {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext)
    attributes: Record<string, any>
    draw(): void
  }
}

