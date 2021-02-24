using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Dtos.User;
using Domain.Entities;

namespace Domain.Interfaces.Services.User
{
    public interface IUserService
    {
        Task<UserDto> Get(Guid id);
        Task<IEnumerable<UserDto>> GetAll();
        Task<UserDtoCreateResult> Post(UserDto user);
        Task<UserDtoUpdateResult> Put(UserDto user, Guid id);
        Task<bool> Delete(Guid id);
    }
}
