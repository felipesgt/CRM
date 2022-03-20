using System;
using System.Net;
using System.Threading.Tasks;
using Application.Leads.Interfaces;
using Domain.Dtos;
using Domain.Leads.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace Application.Leads.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class LeadsController : ControllerBase
  {
    private readonly ILeadsService _service;
    
    public LeadsController(ILeadsService service)
    {
      _service = service;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] PagedInput input)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      try
      {
        return Ok(await _service.GetAll(input));
      }
      catch (ArgumentException e)
      {
        return StatusCode((int)HttpStatusCode.InternalServerError, e.Message);
      }
    }
    [HttpGet]
    [Route("{id}", Name = "GetById")]
    public async Task<IActionResult> Get(Guid id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      try 
      {
        return Ok(await _service.Get(id));
      }
      catch (ArgumentException e)
      {
        return StatusCode((int)HttpStatusCode.InternalServerError, e.Message);
      }
    } 
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] LeadInput lead)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      try
      {
        var result = await _service.Create(lead);
        return Ok(result);
      }
      catch (ArgumentException e)
      {
        return StatusCode((int)HttpStatusCode.InternalServerError, e.Message);
      }
    }
    [HttpPut]
    public async Task<IActionResult> Update([FromBody] LeadInput lead)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      try
      {
        var result = await _service.Update(lead);
        return Ok(result);
      }
      catch (ArgumentException e)
      {
        return StatusCode((int)HttpStatusCode.InternalServerError, e.Message);
      }
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      try
      {
        return Ok(await _service.Delete(id));
      }
      catch (ArgumentException e)
      {
        return StatusCode((int)HttpStatusCode.InternalServerError, e.Message);
      }
    }

  }
}
